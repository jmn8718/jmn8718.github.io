<script>
  import Icon from "svelte-awesome";
  import { gitlab, github } from "svelte-awesome/icons";
  import ProjectBlock from "./ProjectBlock.svelte";
  import Section from "./Section.svelte";
  const props = {
    id: "projects",
    title: "projects"
  };
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icons_wrapper {
    margin-top: 16px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
  .block_title {
    text-align: center;
    font-size: 1.75em;
    color: #222;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
</style>

<Section {...props}>
  <div class="wrapper">
    <h3 class="block_title m-0">Profesional Projects</h3>

    <ProjectBlock
      link="https://criptan.com/"
      projectName="Criptan"
      description="Crypto finance application">
      During my time on this project, I took on various responsibilities including:
      <ul>
        <li>Developing serveless backend services for the application using AWS technologies</li>
        <li>Developing serveless backend services for the application using AWS technologies</li>
        <li>Designing and developing new services to meet the technical requirements of the project.</li>
      </ul>
      Through this experience, I gained expertise in AWS technologies, system architecture, and software development best practices.
    </ProjectBlock>
    <ProjectBlock
      link="https://plingo.io"
      projectName="Plingo"
      description="Online language education platform">
      As part of my role, I primarily focused on server-side development where I was responsible for designing and implementing various functionalities and services on AWS.
    </ProjectBlock>

    <ProjectBlock
      link="https://hollaex.com/"
      projectName="Hollaex"
      description="Cryptocurrency Exchange">
      I was responsible for both the server and client sides of the project. Starting from scratch, I began by building basic functionality on the server side and then moved on to the client side once the server had been set up. I worked closely with the CEO to implement functionality based on market-specific requirements, while also ensuring that the project was fully customizable using SQL triggers and functions at the database level
      <br />
      WMy goal was to create a system that could be adapted to different fiat currencies and any type of cryptocurrencies for trading purposes. As a result, I made the project fully customizable to meet the needs of various clients.
      <br />
      First deployed Crypto exchange
      <a
        href="https://pro.exir.io/login"
        target="_blank"
        rel="noopener noreferrer">
        <strong>Exir</strong>
      </a>
      since December 2017.
    </ProjectBlock>

    <ProjectBlock
      link="https://xray.trade/"
      projectName="XRAY"
      description="Cryptocurrency Trade platform.">
      I was responsible for both server and client-side development on this project. My main task was to refactor and migrate the codebase to a new structure.
      <br />
      On the server side, I migrated the codebase from mongoDB to PostgreSQL and refactored the existing code to use promises instead of callbacks, as part of the migration process.
      <br />
      On the client side, I built the skeleton of the current design and developed core components to be used in the trading screen. Additionally, I provided valuable feedback on user experience as a customer and worked closely with the designer to improve the approach.
    </ProjectBlock>
    <ProjectBlock
      link="https://www.bbvaapimarket.com"
      projectName="BBVA APIMarket"
      description="API portal for developers">
      During the first stage of the project, I contributed to different areas including frontend development with AngularJS, SASS, and jQuery, CMS development with Liferay, and scripting for internal services using Bash, Python, and Node.js. In the second stage, my focus was on backend development using Java and Spring. A significant portion of my contribution was on documenting the API by processing a RAML to generate static documentation that was published on the portal. You can take a look at one of the documentations I worked on
      <strong>
        <a
          href="https://es.bbvaapimarket.com/documentation/bancomer/accounts?lang=es"
          target="_blank">
          here
        </a>
      </strong>
    </ProjectBlock>

    <h3 class="block_title">Personal Projects</h3>
    You can find other personal projects on my repositores
    <div class="icons_wrapper">
      <a href="https://github.com/jmn8718" target="_blank">
        <Icon data={github} scale="2" class="icon_item" />
      </a>
      <a href="https://gitlab.com/users/jmn8718" target="_blank">
        <Icon data={gitlab} scale="2" class="icon_item" />
      </a>
    </div>
  </div>
</Section>
