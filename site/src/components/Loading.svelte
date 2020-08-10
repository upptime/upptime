<script>
  import config from "../data/config.json";
</script>

<style>
  .loading {
    text-align: center;
    margin: 2.5rem 0;
  }
  svg {
    zoom: 1.5;
  }
</style>

<div class="loading">
  <svg
    width="38"
    height="38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#aaa"
    title={config.loading}>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite" />
        </path>
      </g>
    </g>
  </svg>
</div>
