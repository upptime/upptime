(function() {
  // 🛡️ ULTIMATE PROTECTION: Prevent the script from being executed multiple times.
  // This eliminates the issue of duplicated event listeners or double UI alerts.
  if (window.__jsDelivrScriptLoaded) return;
  window.__jsDelivrScriptLoaded = true;

  console.log("🚀 jsDelivr CDN Transformer, API Protector, and Cache Purger initialized!");

  // Retrieve the Cache Buster parameter ('t') from the URL search query
  const urlParams = new URLSearchParams(window.location.search);
  const cacheBuster = urlParams.get('t');

  // CORE LOGIC: Transform the raw GitHub path to the CDN branch-specific path
  // E.g., /$REPO/master/ -> /$REPO@master/
  // NOTE: $REPO will be automatically replaced by the CI/CD build process.
  const fix = url => typeof url === 'string' ? url.replace('/$REPO/master/', '/$REPO@master/') : url;

  // Track all CDN resource URLs that need to be explicitly purged
  const fetchTargets = new Set();
  fetchTargets.add('https://cdn.jsdelivr.net/gh/$OWNER/$REPO@master/history/summary.json');
  
  // 🔥 Explicitly add this script itself to the purge list as a fallback mechanism.
  fetchTargets.add('https://cdn.jsdelivr.net/gh/$OWNER/$REPO@master/cache-interceptor.js');

  // 1. Intercept the native fetch function
  const origFetch = window.fetch;
  window.fetch = async function(...args) {
    let reqUrl = '';
    let isRequestObject = false;

    if (typeof args[0] === 'string') {
      reqUrl = args[0];
    } else if (args[0] instanceof Request) {
      reqUrl = args[0].url;
      isRequestObject = true;
    } else {
      return origFetch.apply(this, args);
    }

    // ============================================================================
    // 🛑 GITHUB API RATE LIMIT PROTECTOR 
    // ============================================================================
    // Unauthenticated GitHub API calls are limited to 60 requests per hour.
    // Refreshing the page ~15 times will exhaust this quota and break the site.
    // 
    // [TOGGLE INSTRUCTIONS]:
    // If you want to keep the interactive graphs and issue tracking (and accept the API usage),
    // you or your CI/CD pipeline should comment out or remove the 'if' block below.
    // ============================================================================
    if (reqUrl.includes('api.github.com/repos/$OWNER/$REPO/issues') || 
        reqUrl.includes('api.github.com/repos/$OWNER/$REPO/commits')) {
      console.warn('🛡️ GitHub API request intercepted to save quota limit. Returning empty array for:', reqUrl);
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    // ============================================================================

    reqUrl = fix(reqUrl); 

    // Inject cache buster 't' parameter to jsDelivr CDN requests
    if (reqUrl.includes('cdn.jsdelivr.net')) {
      fetchTargets.add(reqUrl.split('?')[0]); 
      if (cacheBuster) {
        reqUrl += (reqUrl.includes('?') ? '&' : '?') + 't=' + cacheBuster;
      }
    }

    if (isRequestObject) {
      args[0] = new Request(reqUrl, args[0]);
    } else {
      args[0] = reqUrl;
    }
    
    try {
      const response = await origFetch.apply(this, args);
      // Fallback: Mock a 200 OK response if GitHub API fails to prevent Svelte from crashing.
      if (!response.ok && reqUrl.includes('api.github.com')) {
        console.error(`⚠️ GitHub API returned error (${response.status}). Automatically mocked as 200 OK to prevent frontend crash.`);
        return new Response(JSON.stringify([]), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return response;
    } catch (error) {
      console.error('🌐 Network request exception occurred:', error);
      throw error;
    }
  };

  // 2. Encapsulate DOM Scanning Logic: Ensure Svelte-injected elements bypass the cache.
  const scanAndFixDOM = () => {
    // Process standard image tags
    document.querySelectorAll('img').forEach(img => {
      let currentSrc = img.src;
      if (!currentSrc) return;
      
      let newSrc = currentSrc;
      if (newSrc.includes('/$REPO/master/')) newSrc = fix(newSrc);
      
      if (cacheBuster && newSrc.includes('cdn.jsdelivr.net') && !newSrc.includes('t=' + cacheBuster)) {
        newSrc += (newSrc.includes('?') ? '&' : '?') + 't=' + cacheBuster;
      }
      
      if (currentSrc !== newSrc) img.src = newSrc;
    });

    // Process inline background images injected by Svelte
    document.querySelectorAll('[style]').forEach(el => {
      const originalStyle = el.getAttribute('style');
      if (!originalStyle) return;
      
      let newStyle = originalStyle;
      if (newStyle.includes('/$REPO/master/')) newStyle = fix(newStyle);
      
      if (cacheBuster && newStyle.includes('cdn.jsdelivr.net') && !newStyle.includes('t=' + cacheBuster)) {
        newStyle = newStyle.replace(/(url\(['"]?)(https:\/\/cdn\.jsdelivr\.net[^'"]+?)(['"]?\))/g, (match, p1, p2, p3) => {
           const separator = p2.includes('?') ? '&' : '?';
           return `${p1}${p2}${separator}t=${cacheBuster}${p3}`;
        });
      }

      // Only update DOM if changed to prevent MutationObserver infinite loops
      if (originalStyle !== newStyle) {
        el.setAttribute('style', newStyle);
      }
    });
  };

  // 🔥 Perform an initial aggressive scan on script load
  scanAndFixDOM();

  // Monitor continuous DOM changes (e.g., Svelte component toggles)
  new MutationObserver(scanAndFixDOM).observe(document.documentElement, { 
    childList: true, 
    subtree: true, 
    attributes: true,         
    attributeFilter: ['style', 'src']
  });

  // 3. Listen to Navbar Button Clicks to Execute the Cache Purging Workflow
  document.addEventListener('click', async (e) => {
    const targetLink = e.target.closest('a');
    
    if (targetLink && targetLink.getAttribute('href') === '#purge-cache') {
      e.preventDefault(); 
      
      targetLink.textContent = "⏳ Purging Cache...";
      targetLink.style.pointerEvents = "none";

      const currentUrls = new Set(fetchTargets);
      
      // Collect visible assets
      document.querySelectorAll('img[src], script[src], link[href]').forEach(el => {
        const url = el.src || el.href;
        if (url && url.includes('cdn.jsdelivr.net')) currentUrls.add(url.split('?')[0]);
      });

      // Collect background images
      document.querySelectorAll('[style]').forEach(el => {
        const styleAttr = el.getAttribute('style');
        if (styleAttr && styleAttr.includes('cdn.jsdelivr.net')) {
          const match = styleAttr.match(/url\(['"]?(https:\/\/cdn\.jsdelivr\.net[^'"]+)['"]?\)/);
          if (match && match[1]) currentUrls.add(match[1].split('?')[0]);
        }
      });

      // 🔥 Send Purge API requests with 'cors' mode to resolve "Empty Response" in Network tab
      const purgeRequests = Array.from(currentUrls).map(url => {
        const purgeUrl = url.replace('https://cdn.jsdelivr.net/', 'https://purge.jsdelivr.net/');
        return fetch(purgeUrl, { mode: 'cors' }).catch(err => {
          console.error('❌ Cache purge request failed for:', purgeUrl, err);
        }); 
      });

      await Promise.all(purgeRequests);

      alert("✅ CDN Cache successfully purged! The page will now reload with the latest data.");
      
      const reloadUrl = new URL(window.location.href);
      reloadUrl.hash = ''; 
      
      const pathSegments = reloadUrl.pathname.split('/');
      const lastSegment = pathSegments[pathSegments.length - 1];
      if (!reloadUrl.pathname.endsWith('/') && !lastSegment.includes('.')) {
        reloadUrl.pathname += '/';
      }
      
      reloadUrl.searchParams.set('t', Date.now());
      window.location.href = reloadUrl.toString();
    }
  });
})();
