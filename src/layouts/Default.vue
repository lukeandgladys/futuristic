<template>
  <div class="container  section2">



    <g-link  to="/" >
      <h1 id="onlyDesk" class="title dolik" ref='title' @click="ruszaj" > {{name}}</h1>

    <h2 id="onlyPhone" class=" title dolik" ref='title2' @click="ruszaj"   >  Futuristic<span>.Fundation</span></h2>
  </g-link>






    <slot/>

</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
import { TimelineLite, TweenMax, gsap } from 'gsap';


export default {
  metaInfo: {
    title: 'Fundation',

  },

  data()  {
    return {
      name: 'Futuristic.Foundation',
      stan: 'brak',
      zamykacz: false
    }
  },
  methods: {
    pokaWsparcie() {
      this.zamykacz = true;

    },

    ruszaj() {
      this.zamykacz = false;

      const RUCHY = document.querySelectorAll('.ruch');
        RUCHY.forEach((ruch) => {
                let wbok = Math.floor((Math.random() * 10) + 1) + 'vw'
                gsap.to(ruch, 1, { x: wbok });
      });
    }
  },



  mounted() {



    const { title } = this.$refs;
    const { title2 } = this.$refs;
    const timeline = new TimelineLite();

    gsap.to(title2, 1, {  x: '16vw' });
    gsap.to(title, 1, {  x: '16vw' });




    const RUCHY = document.querySelectorAll('.ruch');
      RUCHY.forEach((ruch) => {
              let wbok = Math.floor((Math.random() * 10) + 1) + 'vw'
              gsap.to(ruch, 1, { x: wbok });
    });




    var container = document.querySelector(".menu");

    var circle = document.querySelector(".circle");

    TweenMax.set(".section", {
      backgroundColor: function() {
        return Math.random() * 0xffffff;
      }
    });

    TweenMax.set(circle, { scale: 0, xPercent: -40, yPercent: -15 });

    container.addEventListener("pointerenter", function(e) {
      TweenMax.to(circle, 0.3, { scale: 1, opacity: 1 });
      positionCircle(e);
    });

    container.addEventListener("pointerleave", function(e) {
      TweenMax.to(circle, 0.3, { scale: 0, opacity: 0 });
      positionCircle(e);
    });

    container.addEventListener("pointermove", function(e) {
      positionCircle(e);
    });

    function positionCircle(e) {
      var rect = container.getBoundingClientRect();
      var relX = e.pageX - container.offsetLeft;
      var relY = e.pageY - container.offsetTop;

      TweenMax.to(circle, 0.3, { x: relX, y: relY });
    }


  }
}
</script>

<style>
@font-face {
    font-family: 'aileronsregular';
    src:  url('../assets/Ailerons-Regular-East.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
	font-family: 'Conv_Ubuntu-LI';
	src: url('../assets/fonts/Ubuntu-LI.eot');
	src: local('☺'), url('../assets/fonts/Ubuntu-LI.woff') format('woff'),
  url('../assets/fonts/Ubuntu-LI.ttf') format('truetype'),
  url('../assets/fonts/Ubuntu-LI.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}




body {
    font-family:  'aileronsregular', sans-serif;
    font-weight: normal;
    font-style: normal;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #000;
    display: flex;
    justify-content: center;
}
h1 {

}
.podstrona p, .podstrona li, .podstrona textarea  {
  font-family: 'Conv_Ubuntu-LI';
  font-weight: normal;
  font-style: normal;
}


@media (orientation: landscape) {
  .title, .krzywak, .podstrona h1, .podstrona h2, .zamykacz {
      margin: 0.5vw  7vw  1.6vw 0  ;
      height: 5.8vw;
      font-size:5.8vw;
      padding: 0;
      border:0;

  }
  .container, .podstrona {
      background-size: 4vw;
  }
  .dolik {
    transform:skewX(-20deg);
    margin-bottom: 9.7vw;
  }
  .title:hover,
  .krzywak:hover {
        color: #fff;
  }
  .zamykacz {
    font-size: 5.8vw;
  }
  #onlyPhone {
    display: none;
  }
  .zamykacz {
    transform:skewX(-20deg) translateX(-21vh);
    position: fixed;
    top: 0; left: 0;

    z-index: 1547486410 !important;
    width: 21vh;
    background-color: #000;
    color: silver;
    text-align: right;
    margin: 0;
    padding: 0.5vh 3vh 65vh 5vh ;
    animation: pokaZamykacz 1s ease-in-out;
  }
  /* .zamykacz:hover {
    animation: wysun 0.2s ease-in-out;
    transform: skewX(-20deg) translateX(-15vh);
  } */
  hr {
    width: 80vw;
    height: 12vh;
    background-image:  url('../assets/back.svg');
    padding: 0;
    margin: 10vh 10vw;
    border: 0;
  }
  .podstrona {
    top: 17vh;
  }
  .pokaKasa {
    width: 50vw;
    margin-left: 25vw;
  }


}
@media (orientation: portrait) {
  .title, .krzywak, .podstrona h1, .podstrona h2, .zamykacz {
      margin: 0.8vw  4.1vw  3.4vw 0  ;
      height: 12vw;
      font-size:12vw;

  }
  .title {
    flex-direction: column;
  }
  .krzywak:hover {
    background-color: #fff;
    color: #000;

  }
  .container, .podstrona {
      background-size: 8.1vw;
  }

  .dolik {
    transform:skewX(-20deg);
    margin-bottom: 19.4vw;

  }
  .title span {
    margin-top: 1vw;
    background-color: #fff;
    color: #000;
    position: relative;
    left: -8vw;
  }

  .circle {
    display: none;

  }
  p, ul li {
    font-size: 6vw;
  }
  #onlyDesk {
    display: none;
  }
  .zamykacz {
    transform:skewX(-20deg) translateX(0);
    position: fixed;
    bottom:0; right: -19vh;
    display: none;

    z-index: 1547486410 !important;
    width: 21vh;
    background-color: #000;
    color: silver;
    text-align: left;
    margin: 0;
    padding: 21vh 3vh 5vh 1vh ;

  }
  /* .zamykacz:hover {

    transform: skewX(-20deg) translateX(19vh);
  } */
  hr {
    width: 90vw;
    height: 4vh;
    background-image:  url('../assets/back.svg');
    background-size: 3vh;
    padding: 0;
    margin: 5vh 5vw;
    border: 0;
  }
  .podstrona {
    top: 16vw;
  }


}

.container {
  margin: 0 auto;
  margin-bottom: 14vh;
  min-height: 87vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  text-align: left;
  background-color: #000;
  color: #fff;
  background-image:  url('../assets/back.svg');
  overflow: hidden;


}

.title, .krzywak{

  display: flex;

  text-transform:  uppercase;
  color: silver;
  background-color: #000;
  letter-spacing: 1px;

  padding: 0 0.8vw 0 0 ;
  /* border: 1px lightgreen solid; */

  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
  /* transform:skewX(-20deg); */

}

.marginDwa {
  margin-left: 4.9vw;
}


.circle {
  position: absolute;
  border-radius:22vw;
  background-color: #fff;
  width: 44vw;
  height: 44vw;
  top: 0;
  left: 0;
  mix-blend-mode:  exclusion;
  backface-visibility: hidden;
  pointer-events: none;
  opacity: 0;
  z-index: 100;
  filter: grayscale();
  /* filter: blur(2vw); */


}
.podstrona p a {
  text-decoration: none;
  color: #000;
  border-bottom: 5px solid silver;
}
.podstrona a:link {
  text-decoration: none;
  color: silver;
}
.podstrona a:hover {
  border-bottom: 5px solid #000;
}
a:link {
  text-decoration: none;
}

p {
  margin: 0 12vw;
}
ul li {
  margin: 0 12vw 12vh 12vw;
  list-style-type: none;

}
.podstrona h1 {
  color: #000;
  background-color: #fff;
  /* transform:skewX(-20deg); */
  /* margin-left: 16vw; */


}



.dolik {
  transform:skewX(-20deg);

}
.note {
  display: none;
}
.menu {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  text-align: left;
}
.podstrona {  animation: pokaPod 0.5s ease-in-out; }

@keyframes pokaPod {
  from {
    transform: translateX(60vw);
    opacity: 0;



  }
  to {
    transform: translateX(0);
    opacity: 1;



  }
}
@keyframes znikaPod {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(20vw);
    opacity: 0;
  }
}



@keyframes pokaZamykacz {
  from {opacity: 0; transform: skewX(-20deg) translateX(-41vh);}
  to {  opacity: 1; transform: skewX(-20deg) translateX(-21vh);}
}


@keyframes wysun {
  from {transform: skewX(-20deg) translateX(-21vh);}
  to {transform: skewX(-20deg) translateX(-15vh);}
}



.displayNone {
  display: none!important;
}
textarea {
  font-size: 6vh;
}
.podstrona {
  color: #000;
  background-color: #fff;
  min-height: 100vh;
}
.czarniak {
  width: 60vw;
  height: 80vh;
  background-color: black;
  transform: skewX(-20deg);

}
.czarniak p {
  color: #fff;
}



</style>
