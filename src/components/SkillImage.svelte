<script>
  export let text;
  export let imageName;
  // import image from "../images/node.png";
</script>

<style>
  .skill-wrapper {
    margin: 8px 16px;
    flex: 1;
  }
  .skill-image {
    width: 100%;
    height: auto;
  }
  .skill-text {
    font-weight: bold;
    /* text-transform: uppercase; */
    text-align: center;
  }
</style>

<div class="skill-wrapper">
  <!-- <image class="skill-image" src={image} alt={text} /> -->
  <span class="skill-text">{text}</span>
</div>
