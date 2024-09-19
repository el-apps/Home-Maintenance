<script lang="ts">
  import { goto } from "$app/navigation";
  import { Task } from "$lib/types/task";
  import MenuCard from "$lib/components/models/menu-card.svelte";
  import Widget from "$lib/components/widgets/widget.svelte";

  export let tasks: Task[];
  let searchText: string = ""
</script>

<Widget title="Tasks" hasSearch="{true}" bind:search="{searchText}">
  <div class="column">
    {#each tasks.filter(x => x.name.includes(searchText)) as task}
      <MenuCard
        name={task.name}
        description={task.description}
        onClicked={() => {
          goto(`/task/${task.id}`);
        }}
      ></MenuCard>
    {/each}
  </div>
</Widget>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }
</style>
