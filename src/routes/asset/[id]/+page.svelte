<script lang="ts">
  import { page } from "$app/stores";
  import { Asset } from "$lib/types/asset";
  import { database } from "$lib/database/database";
  import AssetWidget from "$lib/components/widgets/asset-widget.svelte";
  import type { AssetDetails } from "$lib/types/asset-details";
  import PartsListWidget from "$lib/components/widgets/parts-list-widget.svelte";
  import TaskListWidget from "$lib/components/widgets/task-list-widget.svelte";
  import type { Part } from "$lib/types/part";
  import type { Task } from "$lib/types/task";

  let asset: Asset = database.getAsset($page.params.id);
  let details: AssetDetails = database.getAssetDetails(asset.id);
  let parts: Part[] = database.getParts(asset.id);
  let tasks: Task[] = database.getTasks(asset.id);
</script>

<div class="base">
  <div class="column">
    <div class="asset">
      <AssetWidget {asset} {details}></AssetWidget>
    </div>
    <div class="row">
      <div class="partlist">
        <PartsListWidget {parts}></PartsListWidget>
      </div>
      <div class="tasklist">
        <TaskListWidget {tasks}></TaskListWidget>
      </div>
    </div>
  </div>
</div>

<style>
  .base {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 16px;
    gap: 8px;
  }
  .column {
    display: flex;
    flex-flow: column wrap;
    gap: 8px;
  }
  .row {
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
  }
  .asset {
  }
  .partlist {
  }
  .tasklist {
  }
</style>
