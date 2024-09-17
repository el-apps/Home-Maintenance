
<script lang="ts">
  export let name: string = ""
  export let description: string = ""
  export let onClicked = () => {}
</script>

<button on:click|preventDefault={onClicked}>
  <span class="flex-auto">
    <h3>{name}</h3>
    <p>{description}</p>
  </span>
</button>

<style>
  span {
    text-align: left;
  }
  span > h3 {
    font-size: large;
  }
  span > p {
    font-size: medium;
    color: rgba(var(--color-surface-200));
  }
  button {
    background-color: rgba(var(--color-surface-700));
    border-radius: 8px;
    padding: 8px;
    margin: 4px;
  }
</style>