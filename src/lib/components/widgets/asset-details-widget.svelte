<script lang="ts">
  import SettingInput from "$lib/components/setting-input.svelte";
  import { AssetDetails } from "$lib/types/asset-details";

  export let details: AssetDetails;
</script>

<div class="base">
  <div class="column">
    <h1 class="title">Details</h1>
    <SettingInput title="Manufacturer" placeholder="Set manufacturer..." bind:value={details.manufacturer}></SettingInput>
    <SettingInput title="Model" placeholder="Set model..." bind:value={details.model}></SettingInput>
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
