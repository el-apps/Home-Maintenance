<script lang="ts">
  import Image from "$lib/components/models/image.svelte";
  import SettingInput from "$lib/components/models/setting-input.svelte";
  import { Asset } from "$lib/types/asset";

  export let asset: Asset;
</script>

<div class="base">
  <div class="column">
    <h1 class="title">Asset</h1>
    <div class="row">
      <div class="assetImage">
        <Image></Image>
      </div>
      <div class="column">
        <SettingInput
          title="Name"
          placeholder="Set name..."
          bind:value={asset.name}
        ></SettingInput>
      </div>
    </div>
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
  .row {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .assetImage {
    height: 100px;
    width: 100px;
    margin-right: 8px;
  }
</style>
