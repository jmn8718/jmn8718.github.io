<script>
  export let link;
  export let projectName;
  export let description;
</script>

<style>
  .project_title {
    text-align: center;
    font-size: 1.25em;
    color: rgb(65, 64, 64);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .project_description {
    font-style: italic;
    font-size: 1.1em;
  }
  .content {
    width: 100%;
  }
</style>

<a href={link} target="_blank">
  <h4 class="project_title">{projectName}</h4>
</a>
<span class="project_description">{description}</span>
<p class="content">
  <slot />
</p>
