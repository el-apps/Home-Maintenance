<script lang="ts">
  import SettingInput from "$lib/components/models/setting-input.svelte";
  import { AssetDetails } from "$lib/types/asset-details";
  import { Asset } from "$lib/types/asset";
  import Widget from "$lib/components/widgets/widget.svelte";
  import MenuCard from "../models/menu-card.svelte";

  export let asset: Asset;
  export let details: AssetDetails;
</script>

<Widget title="Asset">
  <div class="column">
    <SettingInput title="Name" placeholder="Set name..." bind:value={asset.name}></SettingInput>
    <SettingInput title="Manufacturer" placeholder="Set manufacturer..." bind:value={details.manufacturer}></SettingInput>
    <SettingInput title="Model" placeholder="Set model..." bind:value={details.model}></SettingInput>
  </div>
</Widget>

<style>
  .column {
    display: flex;
    flex-flow: column wrap;
  }
</style>
