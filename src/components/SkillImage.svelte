<script type="module">
  export let text;
  export let imageName;
  import aws from "../images/aws.png";
  import css from "../images/css.png";
  import docker from "../images/docker.png";
  import github from "../images/github.png";
  import html5 from "../images/html5.png";
  import js from "../images/js.png";
  import mongo from "../images/mongo.png";
  import node from "../images/node.png";
  import postgre from "../images/postgre.png";
  import react from "../images/react.png";
  import redis from "../images/redis.png";

  const getImagePath = name => {
    switch (name) {
      case "aws":
        return aws;
      case "css":
        return css;
      case "docker":
        return docker;
      case "github":
        return github;
      case "html5":
        return html5;
      case "js":
        return js;
      case "mongo":
        return mongo;
      case "node":
        return node;
      case "postgre":
        return postgre;
      case "react":
        return react;
      case "redis":
        return redis;
    }
  };
</script>

<style>
  .skill-wrapper {
    margin: 8px 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skill-image {
    width: auto;
    height: 64px;
  }
  .skill-text {
    font-weight: bold;
    text-align: center;
    margin-top: 8px;
  }
</style>

<div class="skill-wrapper">
  <img class="skill-image" src={getImagePath(imageName)} alt={text} />
  <span class="skill-text">{text}</span>
</div>
