<script lang="ts">
  export let source: string = "";
  export let altText: string = "";
</script>

{#if source !== ""}
  <img src={source} alt={altText} />
{:else}
  <div class="placeholder">
    <p class="placeholderText">Image</p>
  </div>
{/if}

<style>
  .placeholderText {
    color: rgba(var(--color-surface-600));
  }
  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid rgba(var(--color-surface-600));
    border-radius: 4px;
    height: 100%;
    width: 100%;
  }
</style>
