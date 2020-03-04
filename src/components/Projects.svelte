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
    font-size: 1.5em;
    color: #222;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .project_title {
    text-align: center;
    font-size: 1.25em;
    color: rgb(65, 64, 64);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  p {
    width: 100%;
  }
</style>

<Section {...props}>
  <div class="wrapper">
    <h3 class="block_title">Profesional Projects</h3>

    <ProjectBlock
      link="https://plingo.io"
      projectName="Plingo"
      description="Online language education platform">
      My work involves working on the server side, both developing
      functionalities and develop different services on AWS.
      <br />
      Also I develop new functionalities on the admin client and the web
      application.
    </ProjectBlock>

    <ProjectBlock
      link="https://hollaex.com/"
      projectName="Hollaex"
      description="Cryptocurrency Exchange">
      My work on this project was in both server and client. I started the
      project from scratch on the server side, and started the client once the
      server had basic functionality.
      <br />
      Worked side by side to CEO to implement functionality that was coming from
      the requirement as we build the project for an especific market, but I
      visualize the customization so build it to be fully customizable using SQL
      triggers and functions on DB level
      <br />
      I made the project full customizable so it can be used in different fiat
      currencies and use any type of cryptocurrencies for trading.
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
      My work on this project was in both server and client. In both sides I was
      in charge of refactor and migrate to a new structure
      <br />
      On the server I migrated/refactored the code to move from mongoDb to
      PostgreSQL. Also refactor of the existing code to use promises instead of
      callback as part of the migration to PostgreSQL.
      <br />
      On the client, I was in charge of building the skeleton of the current
      design and core components to be used in the trading screen.
      <br />
      Also provided feedback on the user experience from testing and using as a
      customer, working side by side with designer to take the best approach.
    </ProjectBlock>
    <ProjectBlock
      link="https://www.bbvaapimarket.com"
      projectName="BBVA APIMarket"
      description="API portal for developers">
      On the first stage of the project I worked in different areas:
      <ul>
        <li>Frontend with angularjs, sass and jquery</li>
        <li>Liferay CMS</li>
        <li>Scripts in bash, python and nodejs for internal services</li>
      </ul>
      On the second stage, I worked on the backend with Java and Spring
      <br />
      One of the main parts I worked on was on the documentation of the API
      processing a RAML to generate the static documentation to be published on
      the portal, you can check one documentation
      <strong>
        <a
          href="https://www.bbvaapimarket.com/documentation/bbva/loans"
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
