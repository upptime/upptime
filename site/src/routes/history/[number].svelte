<script context="module">
  export async function preload(page) {
    const { number } = page.params;
    return { slug: number };
  }
</script>

<script>
  import History from "../../components/History.svelte";
  import Graph from "../../components/Graph.svelte";
  export let slug;
</script>

<Graph {slug} />
<History {slug} />
