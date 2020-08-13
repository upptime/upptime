<script context="module">
  export async function preload(page) {
    const { number } = page.params;
    return { slug: number };
  }
</script>

<script>
  import Summary from "../../components/Summary.svelte";
  import History from "../../components/History.svelte";
  import Graph from "../../components/Graph.svelte";
  export let slug;
</script>

<Summary {slug} />
<Graph {slug} />
<History {slug} />
