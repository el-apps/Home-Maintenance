<script>
  import { goto } from "$app/navigation";
  import EquipmentCard from "$lib/components/models/equipment-card.svelte";

  export let equipmentList = [
    {
      id: 0,
      name: "Furnace",
      description: "A hot furnace",
    },
    {
      id: 1,
      name: "Water Softener",
      description: "A salty water softener",
    },
    {
      id: 2,
      name: "Odessey",
      description: "A fast vehicle",
    },
  ];
</script>

<div class="page">
  <h1>Equipment</h1>
  <dl>
    {#each equipmentList as item}
      <EquipmentCard
        equipment={item}
        onClicked={() => goto(`/equipment/${item.id}`)}
      ></EquipmentCard>
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
