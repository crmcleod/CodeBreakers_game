<template>
    <div v-if="gameOn" id="cardsGrid">
        <card id="looped-card" v-for="card, index in cards" :key="index" :card="card"></card>
    </div>
</template>
 
<script>
import Card from './Card'
export default {
    name: 'grid',
    props: ['cards', "gameOn"],
    components: {
        'card': Card
    }
}
</script>

<style>
#cardsGrid{
    perspective: 2000px;
    transform-style: preserve-3d;
}
#looped-card { 
    cursor: pointer;
    background-color: #c7c09a;
    font-size: 1rem;
    transition:  0.1s linear;
}
#looped-card:hover:not(.cardSelected){
    transform: scale(1.05) translateZ(2rem) ;
    filter: brightness(1.1);
}
</style>