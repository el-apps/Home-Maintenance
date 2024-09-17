<script lang="ts">
  import { page } from "$app/stores";
  import { Asset } from "$lib/types/asset";
  import { database } from "$lib/database/database";
  import AssetWidget from "$lib/components/widgets/asset-widget.svelte";

  let asset: Asset = database.getAsset($page.params.id);
</script>

<div class="base">
  <AssetWidget {asset}></AssetWidget>
</div>

<style>
  .base {
    margin: 16px;
  }
</style>
