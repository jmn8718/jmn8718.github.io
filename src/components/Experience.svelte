<script>
  import Section from "./Section.svelte";
  import WrokBlock from "./WorkBlock.svelte";
  const props = {
    id: "experience",
    title: "Experience",
  };
</script>

<Section {...props}>
  <WrokBlock
    companyName="Criptan"
    period="January 2021 - Present"
    location="Remote - Seoul 🇰🇷"
    role="Software Engineer"
  >
    Working on
    <a href="https://www.criptan.es/?lang=en" target="_blank">Criptan</a>
    on the backend.
    <br />
    <ul>
      <li>Develop AWS Lambdas with nodejs and typescript.</li>
      <li>Build API using AWS API Gateway with Lambda</li>
      <li>
        Develop internal API for admin with App AWS Appsync, Amplify and Cognito
      </li>
      <li>Build, deploy and configure admin frontent with React-admin</li>
    </ul>
  </WrokBlock>
  <WrokBlock
    companyName="Threelabs"
    period="August 2019 - January 2021"
    location="Seoul 🇰🇷"
    role="Software Engineer"
  >
    Worked on
    <a href="https://plingo.io/" target="_blank">Plingo</a>
    developing the architecture and the services for our mobile application.
    <br />
    My role involved to work on different stages of the development flow on our service.
    <br />
    <ul>
      <li>
        Design and discuss about new functionalities and design API endpoint for
        the mobile app.
      </li>
      <li>
        Develop and test new functionalities on the backend, and refactor
        existing codebase to improve the performance.<br />
        Backend uses nodejs, with MongoDB (with mongoose) and Redis for websockets
        with socket.io and caching for db queries.
      </li>
      <li>
        Configure and manage different services on AWS to deploy the backend
        service, using docker, ECS, lambda and CodePipeline.
      </li>
      <li>Develop and mantain lambda function for internal services.</li>
      <li>
        Refactor and develop new functionalities for the mobile app using react
        native.
      </li>
      <li>
        Develop new functionalities for admin client built with react-admin.<br
        />
        Deploy to S3 and Cloudfront using CodePipeline.
      </li>
    </ul>
  </WrokBlock>
  <WrokBlock
    companyName="Auth0"
    link="https://auth0.com/"
    period="September 2018 - July 2019"
    location="Remote - Madrid 🇪🇸"
    role="Software Engineer"
  >
    Initialy I worked on the Sustainment team. My task involved analyze current
    codebase to invesitgate the root of issues on our codebase, it involved to
    analyze differente projects and flows to determine the nature of the issue.
    On my tasks I have to contact with members of other teams and work with them
    to find the best solution for each case. Then I will work on apply the
    changes to solve the issue.
    <br />
    As part of working on each issue, I wrote an internal post to help in future
    cases for other members, whether is to help them to setup the environment for
    their work or to write the process so anyone can know my decision and reasons
    of my actions
    <br />
    As part of my team task, I had to be on concierge as our team is remote based,
    so when I am the one in my timezome, I took charge of help other member of Auth0
    when they required help of my team and also to be the responsible of my time
    when we have to handle internal incidents and we need to be present.
    <br />
    Later I was moved to one of the core teams "Protocols and sessions", were I was
    a member of the team that worked on the different protocols that were integrated
    on the system and how the sessions are handled.
  </WrokBlock>
  <WrokBlock
    companyName="Bitholla"
    link="https://bitholla.com/"
    period="July 2017 - June 2018"
    location="Remote - Madrid 🇪🇸 /Seoul 🇰🇷"
    role="Lead Software Engineer"
  >
    I was responsible of the design, development and deployments of our systems.
    We builded a cryptocurrency platform. We have developed a crypto exchange
    and a trading platform for cryptocurrencies using different crypto
    exchanges. For our server side code we uses nodejs and for the client side
    we uses react and redux. The system are live systems so we used websockets
    to connect the server with the client.
    <br />
    Tasks:
    <ul>
      <li>Designing crypto exchange</li>
      <li>Develop API with node, express and swagger</li>
      <li>Deploying on AWS and docker</li>
      <li>Work with postgresql, redis and mongoDB</li>
      <li>Work with socket.io</li>
      <li>Developing SPA with react and websockets</li>
    </ul>
  </WrokBlock>
  <WrokBlock
    companyName="Famoco"
    link="https://www.famoco.com/"
    location="Brussels 🇧🇪"
    period="July 2016 - July 2017"
    role="Fullstack developer"
  >
    My main project is developing a SPA in React, we use redux, redux-sagas; We
    are porting a Django and Boostrap application to React, using material
    design as our main guidelines, and consuming the API that our backend team
    are developing. We work hand by hand in the Frontend and Backend applying
    agile techniches for the development. As a side projects I develop android
    apps (because our devices use Android) using React Native; Also I develop
    web apps with React, so I can use that project to test future features of
    our main app. For this projects I mainly develop servers with nodejs,
    developing a REST API or a graphql server for the apps. To deploy this
    project I used docker.
  </WrokBlock>
  <WrokBlock
    companyName="Beeva"
    period="May 2015 - July 2016"
    location="Madrid 🇪🇸"
    role="Fullstack developer"
  >
    On my project bbvaapimarket.com we developed a portal to manage access to
    Apis. We followed a Scrum methodology of development. In the beginning my
    main task was developing selenium test to satisfy the features that the
    Product Owner described. After a couple of month and know better about the
    project, I joined the frontend development tasks, where we developed the
    styles, layouts... to satisfy the design of the project of an angularjs app
    that run over Liferay. As we needed more features, I developed some Liferay
    portlets in Java that consume API services and connect that data with the
    angularjs app that we developed. Aside for the frontend project, we required
    some small projects that i developed in nodejs. As we were provider to
    access of 3rd party APIs, we have a RAML documentation from other teams, so
    my project was to transform the RAML into a html+css+js that we publish in
    our site, where my task where develop the server that handle the
    transformation, develop the templates and style of the design for the
    project, and review the RAML. Thanks to this side project I got to know more
    about APIs and the need of a good documentation in development. After the
    beta release, we changed from angular to polymer, and moved away from
    Liferay to a REST API for our SPA app. In this second stage, I was part of
    the backend team, where I developed services for the internal API, we used
    JAVA and Spring.
  </WrokBlock>
  <WrokBlock
    companyName="Cloudroom"
    period="February 2015 - May 2015"
    location="Madrid 🇪🇸"
    role="Fullstack developer (Internship)"
  >
    This was part of my master, where I was part of the development team with
    other students. In this project I was part of the design and develop stages
    of the project. We follow a Scrum methodology with 3 weeks iterations. It
    was a project where we were specify and design the services according to the
    requirements that we received. We developed a MOOC Learning Platform with a
    social approach. Our stack of technologies was angularjs, nodejs,
    coffescript, neo4j, mariadb. In the backend I developed a REST API in nodejs
    and coffescript, we used a graph database to handle the social approach of
    resources with many link to other entities. For some resources that required
    more restricted requirements we used a SQL database (mariadb). We developed
    test using mocha and chai. For the frontend, as we developed the services,
    we developed the frontend applications that consumed that services; We used
    angularjs version 1. In this project I had my first real experience in a web
    project, where I learned a lot of about the lifecycle of a software project.
  </WrokBlock>
</Section>
