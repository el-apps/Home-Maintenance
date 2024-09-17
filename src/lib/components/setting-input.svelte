<script lang="ts">
  export let title: string = "" 
  export let placeholder: string = ""
  export let value: string = ""
  export let enabled: boolean = true
</script>

<div>
  <h1 class="title">{title}</h1>
  <input class="input" placeholder="{placeholder}" bind:value disabled="{!enabled}"/>
</div>

<style>
  .title {
    font-size: medium;
    padding-left: 8px;
  }

  .input {
    background-color: transparent;
    padding: 0 8px 0 8px;
    border-radius: 4px;
    font-size: medium;
  }
</style>