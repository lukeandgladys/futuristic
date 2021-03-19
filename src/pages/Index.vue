<template>
  <Layout>
    <div class="loader">
    </div>
    <div class="circle">

    </div>

<div class="menu">
    <div v-for="edge in $page.allContentfulPages.edges" :key="edge.node.id">
      <g-link :to="edge.node.title"  ><p class='krzywak ruch'  >{{edge.node.nazwa}}</p></g-link>
    </div>




</div>


  </Layout>
</template>
<page-query>
  {
    allContentfulPages {
      edges {
        node {
          nazwa
          id
          title



          }
        }
      }
  }


</page-query>






<script>
import { TimelineLite, TweenMax, gsap } from 'gsap';

export default {

  mounted() {
    const timeline = new TimelineLite();
    const loader = document.querySelector(".loader")
    timeline.to(loader, 0.8, {x: '-100%'}).to(loader, 1, {opacity: 0});
  }


}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.loader {
  width: 100%;
  height: 100%;
  position: absolute;
  top:0; left:0;
  background-color: #000;
  z-index: 1000000;
  display: block;
}
</style>
