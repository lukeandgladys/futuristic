<template>
  <Layout>
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
export default {



}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
