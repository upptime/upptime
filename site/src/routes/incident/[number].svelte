<script context="module">
  export async function preload(page) {
    const { number } = page.params;
    return { number };
  }
</script>

<script>
  import Incident from "../../components/Incident.svelte";
  export let number;
</script>

<Incident {number} />
