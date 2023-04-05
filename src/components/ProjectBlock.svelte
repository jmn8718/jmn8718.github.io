<script type="module">
  import Icon from "svelte-awesome";
  import { desktop } from "svelte-awesome/icons";
  export let link;
  export let projectName;
  export let description;
</script>

<style>
  .project_title {
    text-align: center;
    font-size: 1.5em;
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
  .link_wrapper {
    display: flex;
    align-items: center;
  }
  .link_wrapper .project_title {
    margin-right: 16px;
  }
</style>

<a href={link} target="_blank" class="link_wrapper">
  <h4 class="project_title color_title">{projectName}</h4>
  <Icon data={desktop} scale="1.5" />
</a>
<span class="project_description">{description}</span>
<p class="content">
  <slot />
</p>
