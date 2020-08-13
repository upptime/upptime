<script context="module">
  export async function preload(page) {
    const { number } = page.params;
    return { number };
  }
</script>

<script>
  import History from "../../components/History.svelte";
  export let number;
</script>

<History {number} />
