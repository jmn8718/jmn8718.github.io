<script>
  import Title from "./Title.svelte";
  export let id;
  export let title;
</script>

<style>
  .section_container {
    width: 100%;
    padding: 16px;
    padding-top: 48px;
  }
  .section_content {
    padding-top: 8px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 70%;
    justify-content: center;
  }
</style>

<div {id} class="section_container">
  <Title text={title} />
  <div class="section_content">
    <slot />
  </div>
</div>
