<script lang="ts">
  import { page } from "$app/stores";
  import { Asset } from "$lib/types/asset";
  import { database } from "$lib/database/database";
  import AssetWidget from "$lib/components/widgets/asset-widget.svelte";
  import AssetDetailsWidget from "$lib/components/widgets/asset-details-widget.svelte";
  import type { AssetDetails } from "$lib/types/asset-details";

  let asset: Asset = database.getAsset($page.params.id);
  let details: AssetDetails = database.getAssetDetails(asset.id);
</script>

<div class="base">
  <AssetWidget {asset}></AssetWidget>
  <AssetDetailsWidget {details}></AssetDetailsWidget>
</div>

<style>
  .base {
    margin: 16px;
    display: flex;
    gap: 8px;
  }
</style>
