<template>
  <Layout>
    <g-link  to="/"><p  class='zamykacz'  @click="ruszaj" >X</p></g-link>
    <div class="podstrona">
      <h2>{{$page.contentfulPages.nazwa}}</h2><hr>
      <div class="" v-html="richtextToHTML($page.contentfulPages.nabogato)">
    </div>
    </div>


  </Layout>
</template>

<page-query>
  query ($id: ID!){
    contentfulPages  (id: $id) {
    nazwa
    id
    nabogato
  }
}

</page-query>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content)
    }
  }
}
</script>

<style>
.podstrona {

  color: #000;
  background-color: #fff;;
  margin: 0 auto;
  min-height: 85vh;
  overflow: visible;




  text-align: center;
  display: flex;
  flex-direction: column;

  width: 100vw;
  position: absolute;
  right: 0;

  z-index: 1011;
  font-size: 2.3em;


}
</style>
