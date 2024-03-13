<script lang="ts">
    import { Img } from "flowbite-svelte";

    export let src: string, alt: string;
</script>

<Img { src } { alt } title = { alt } size="max-w-xl" />