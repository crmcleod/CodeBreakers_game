<template>

<div class="card" v-bind:class="{cardSelected: card.isClicked }" v-on:click="clickCard">
  
  <div v-bind:class="[!card.isHidden || card.isClicked ? card.colour : card]">
    <p>{{card.word}}</p>
  </div>
</div>

</template>

<script>
import {eventBus} from "@/main";

export default {
  name: 'card',
  props: ['card'],

  methods: {
    clickCard: function() {
    eventBus.$emit('card-selected', this.card)
    },

    showCards(){
      this.card.isHidden = !this.card.isHidden
    },
  
    gameStateText() {
      return this.gameOn ? 'End turn' : 'Start game'
    }
  }
  
}
</script>

<style>
.card {
  text-transform: uppercase;
  border: 3px solid rgb(179, 176, 163);
  background: linear-gradient(135deg, rgba(0,0,0,0.22), rgba(255, 255, 255, 0.336));
  text-align: center;
  width: 7.5vh;
  height: 7.5vh;
  margin: 0.6vw;
  padding: 0.6vw ;
  border-radius: 15%;
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.562);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
p{
  width: 100%;
  text-align: center;
}
.cardSelected {
  border: 3px solid rgb(253, 181, 64);
  padding: 0.6vw;
}

.card .Red {
  width: 7.5vh;
  height: 7.5vh;
  transition: 0.1s;
  border-radius: 13%;
  padding: 0.6vw;
  margin: -0.6vw;
  color: white;
  background: linear-gradient(135deg, rgba(194, 73, 73, 0.836), rgb(177, 8, 8));
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card .Blue {
  width: 7.5vh;
  height: 7.5vh;
  color: blue;
  transition: 0.1s;
  border-radius: 13%;
  padding: 0.6vw;
  margin: -0.6vw;
  color: white;
  background: linear-gradient(135deg, rgba(55, 154, 211, 0.836), rgb(20, 117, 134));
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card .Black {
  background: linear-gradient(135deg, rgba(60, 60, 60, 0.836), rgb(0, 0, 0));
  color: white;
  width: 7.5vh;
  height: 7.5vh;
  border-radius: 13%;
  padding: 0.6vw;
  margin: -0.6vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card .hidden {
  color:black;
}
</style>