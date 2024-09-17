<script lang="ts">
  import { goto } from "$app/navigation";
  import SettingInput from "$lib/components/models/setting-input.svelte";
  import { AssetPart } from "$lib/types/asset-part";
  import MenuCard from "$lib/components/models/menu-card.svelte";

  export let parts: AssetPart[];
</script>

<div class="base">
  <div class="column">
    <h1 class="title">Parts</h1>
    {#each parts as part}
      <MenuCard name="{part.name}" description="{part.description}" onClicked="{() => {goto(`/part/${part.id}`)}}"></MenuCard>
    {/each}
  </div>
</div>

<style>
  .title {
    display: flex;
    font-size: larger;
    justify-content: center;
  }
  .base {
    background-color: rgba(var(--color-surface-800));
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 8px;
    width: fit-content;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
</style>
