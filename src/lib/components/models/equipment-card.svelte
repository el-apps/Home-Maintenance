
<script>
  export let equipment
  export let onClicked = () => {}
</script>

<button on:click={onClicked}>
  <span class="flex-auto">
    <h3>{equipment ? equipment.name : ""}</h3>
    <p>{equipment ? equipment.description : ""}</p>
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
    font-size: small;
  }
  button {
    background-color: rgba(var(--color-surface-700));
    border-radius: 8px;
    padding: 4px;
    margin: 4px;
  }
</style>