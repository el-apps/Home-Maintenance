<script lang="ts">
  import { page } from "$app/stores";
  import { Asset } from "$lib/types/asset";
  import { database } from "$lib/database/database";
  import AssetWidget from "$lib/components/widgets/asset-widget.svelte";
  import AssetDetailsWidget from "$lib/components/widgets/asset-details-widget.svelte";
  import type { AssetDetails } from "$lib/types/asset-details";
  import PartsListWidget from "$lib/components/widgets/parts-list-widget.svelte";
  import type { AssetPart } from "$lib/types/asset-part";

  let asset: Asset = database.getAsset($page.params.id);
  let details: AssetDetails = database.getAssetDetails(asset.id);
  let parts: AssetPart[] = database.getParts(asset.id);
</script>

<div class="base">
  <AssetWidget {asset}></AssetWidget>
  <AssetDetailsWidget {details}></AssetDetailsWidget>
  <PartsListWidget {parts}></PartsListWidget>
</div>

<style>
  .base {
    display: flex;
    flex-direction: column;
    margin: 16px;
    gap: 8px;
  }
</style>
