<script lang="ts">
  import SettingInput from "$lib/components/models/setting-input.svelte";

  export let title: string = ""
  export let color: string = ""
  export let hasSearch: boolean = false
  export let search: string = ""
</script>

<div class="base" style="background-color: {color};">
  <h1 class="title">{title}</h1>
  {#if hasSearch}
  <SettingInput placeholder="Search..." bind:value={search}></SettingInput>
  {/if}
  <slot class="content"></slot>
</div>

<style>
  .title {
    display: flex;
    font-size: larger;
    justify-content: center;
    margin-bottom: 8px;
  }
  .base {
    background-color: rgba(var(--color-surface-800));
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
  }
  .content {
    overflow-y: auto;
  }
</style>
