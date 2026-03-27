<script lang="ts">
  export let src: string;
  export let alt = '';
  export let caption = '';
  export let width: string = '100%';
</script>

<figure class="figure" style={`max-width: ${width};`}>
  <img src={src} alt={alt} loading="lazy" />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  .figure {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .figure img {
    width: 100%;
    height: auto;
    display: block;
  }

  .figure figcaption {
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #6b7280;
    font-style: italic;
    max-width: 65ch;
    margin: 0 auto;
  }
</style>