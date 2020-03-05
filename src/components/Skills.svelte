<script>
  import SkillImage from "./SkillImage.svelte";
  import Section from "./Section.svelte";
  const props = {
    id: "skills",
    title: "Skills"
  };
</script>

<style>
  .wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
  }
</style>

<Section {...props}>
  <div class="wrapper">
    <SkillImage text="NodeJS" imageName="node" />
    <SkillImage text="ReactJS" imageName="react" />
    <SkillImage text="Javascript" imageName="js" />
    <SkillImage text="HTML" imageName="html" />
    <SkillImage text="CSS" imageName="css" />
    <SkillImage text="Docker" imageName="docker" />
    <SkillImage text="MongoDB" imageName="mongo" />
    <SkillImage text="PostgreSQL" imageName="postgre" />
    <SkillImage text="Redis" imageName="redis" />
    <SkillImage text="Github" imageName="github" />
  </div>
</Section>
