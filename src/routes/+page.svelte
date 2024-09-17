<script>
  import { goto } from "$app/navigation";
  import MenuCard from "$lib/components/models/menu-card.svelte";
  import { database } from "$lib/database/database"

  export let assetList = database.getAssets()
</script>

<div class="page">
  <h1>Assets</h1>
  <dl>
    {#each assetList as item}
      <MenuCard
        name={item.name}
        description={item.description}
        onClicked={() => goto(`/asset/${item.id}`)}
      ></MenuCard>
    {/each}
  </dl>
</div>

<style>
  .page {
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 16px;
  }
  h1 {
    display: flex;
    justify-content: center;
    font-size: xx-large;
    margin-bottom: 16px;
  }
  dl {
    display: flex;
    justify-content: center;
    flex-flow: row;
  }
</style>
