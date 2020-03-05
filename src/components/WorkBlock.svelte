<script>
  export let companyName = "Threelabs";
  export let link = "";
  export let period = "Since August of 2019";
  export let location = "";
  export let role = "Software Engineer";
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }
  .title {
    text-align: center;
    font-size: 1.5em;
    color: #222;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .information {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .content {
    margin-top: 16px;
  }

  @media screen and (max-width: 640px) {
    .information {
      flex-direction: column;
    }
    .information p {
      margin: 0 0 8px;
    }
  }
</style>

<div class="wrapper">
  {#if link}
    <a href={link} target="_blank">
      <h3 class="title">{companyName}</h3>
    </a>
  {:else}
    <h3 class="title">{companyName}</h3>
  {/if}
  <div class="information">
    <p>
      <strong>Role</strong>
      : {role}
    </p>
    <p>
      <strong>Location</strong>
      : {location}
    </p>
    <p>
      <strong>Period</strong>
      : {period}
    </p>
  </div>
  <div class="content">
    <slot />
  </div>
</div>
