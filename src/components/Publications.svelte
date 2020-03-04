<script>
  import Icon from "svelte-awesome";
  import { medium } from "svelte-awesome/icons";
  import Section from "./Section.svelte";
  const props = {
    id: "publications",
    title: "Publications"
  };
</script>

<style>
  .publication_title {
    font-size: 1.2em;
    color: rgb(65, 64, 64);
    margin-bottom: 2px;
  }
  .publication_description {
    margin-bottom: 8px;
  }
  .publication_information {
    display: flex;
    align-items: center;
  }
  .publication_information span {
    margin-right: 16px;
  }
</style>

<Section {...props}>
  <div class="publication_information">
    <span>You can find some of my publications on my personal medium</span>
    <a href="https://medium.com/@jmn8718" target="_blank">
      <Icon data={medium} scale="1.5" />
    </a>
  </div>
  <a
    href="https://blog.couchbase.com/graphql-server-node-couchbase-ottoman-spatial-view/"
    target="_blank">
    <h5 class="publication_title">
      Graphql server with node and couchbase, ottoman and spatial view
    </h5>
  </a>
  <span class="publication_description">
    Post about how to use Couchbase spartial views using nodejs and graphql
  </span>
  <a
    href="https://blog.couchbase.com/develop-a-rest-api-with-couchbase-ottoman-nodejs-hapijs/"
    target="_blank">
    <h5 class="publication_title">
      Develop a REST API with Couchbase Ottoman + Node.js + hapi.js
    </h5>
  </a>
  <span class="publication_description">
    Post on how develop a rest API using nodejs and hapijs, using couchbase as a
    database
  </span>
</Section>
