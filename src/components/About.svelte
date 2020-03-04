<script>
  import Section from "./Section.svelte";
  const props = {
    id: "about",
    title: "About me"
  };
</script>

<style>
  .block {
    margin-bottom: 24px;
  }
</style>

<Section {...props}>
  <div class="block">
    Hello, my name is Jose Miguel. I'm a Software Engineer working at Threelabs
    in Seoul, South Korea.
    <br />
    I'm a Software Engineer graduated in UPM, Madrid, with specialization in
    distributed software and services.
    <br />
    I am passionate about new technologies and I'm always up for new challenges.
  </div>
  <div class="block">
    Aside from technology, I enjoy photograpy, travel, sport, food, nature. I
    practice runnning, football, cycling and hiking.
    <br />
    <br />
    Running since 2006, this are some of my achivements
    <br />
    <b>PB</b>
    <br />
    2015 🇪🇸 San Silvestre Vallecana 10k 34'04''
    <br />
    <b>Marathons</b>
    <br />
    2019 🇯🇵 Osaka 2h56'52''
    <br />
    2017 🇱🇺 Rotterdam 3h09 35''
    <br />
    2011 🇪🇸 Madrid 3h31'12''
    <br />
    2008 🇰🇷 Seoul 3h21'36''
    <br />
    <br />
    I have hiked to Toubkal (4.167 m) in Morocco, Teide (3.718 m) in Spain
  </div>
</Section>
