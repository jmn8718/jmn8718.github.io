<script>
  import Icon from "svelte-awesome";
  import {
    gitlab,
    github,
    linkedin,
    medium,
    envelope
  } from "svelte-awesome/icons";

  import Section from "./Section.svelte";
  const props = {
    id: "contact",
    title: "Contact"
  };
</script>

<style>
  .icons_wrapper {
    display: flex;
    justify-content: space-around;
    margin: 16px;
  }
  .text {
    text-align: center;
    width: 100%;
  }
</style>

<Section {...props}>
  <p class="text">
    If you want to contact me, just send me an email to
    <a href="mailto: jmn8718@gmail.com">jmn8718@gmail.com</a>
    or contact me at
  </p>
  <div class="icons_wrapper">
    <a href="mailto: jmn8718@gmail.com" target="_blank">
      <Icon data={envelope} scale="2" class="icon_item" />
    </a>
    <a href="https://www.linkedin.com/in/jm8nav/" target="_blank">
      <Icon data={linkedin} scale="2" class="icon_item" />
    </a>
    <a href="https://medium.com/@jmn8718" target="_blank">
      <Icon data={medium} scale="2" class="icon_item" />
    </a>
    <a href="https://github.com/jmn8718" target="_blank">
      <Icon data={github} scale="2" class="icon_item" />
    </a>
    <a href="https://gitlab.com/users/jmn8718" target="_blank">
      <Icon data={gitlab} scale="2" class="icon_item" />
    </a>
  </div>
</Section>
