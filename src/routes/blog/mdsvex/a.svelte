<script lang="ts">
    import { A } from 'flowbite-svelte';
    
    export let href: string;
</script>
  
<A {href} class="font-medium hover:underline"><slot /></A>  