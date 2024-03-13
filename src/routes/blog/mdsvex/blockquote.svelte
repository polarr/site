<script>
    import { Blockquote } from 'flowbite-svelte';
    import { QuoteSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Blockquote size="xl">
    <QuoteSolid class="w-10 h-10 text-gray-400 dark:text-gray-600" />
    <slot />
  </Blockquote>  