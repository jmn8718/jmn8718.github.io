<script>
  import Header from "./Header.svelte";
  import About from "./About.svelte";
  import Education from "./Education.svelte";
  import Experience from "./Experience.svelte";
  import Projects from "./Projects.svelte";
  import Publications from "./Publications.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .content {
    flex: 1;
  }
</style>

<Header />
<div class="container" id="home">
  <div class="content">
    <About />
    <Experience />
    <Education />
    <Projects />
    <Publications />
    <Contact />
  </div>
  <Footer />
</div>
