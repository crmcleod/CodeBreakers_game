<template>
<div >
    <form >
    <!-- <input v-model="message" type="text"/> -->
    <!-- <button v-on:click.prevent="this.send()" type="submit" value="submit">Submit</button> -->
     </form>
  <!-- <h1 v-for="chats in chat">{{chats}} -->
  </h1>
  
  </div>
</template>

<script>
import {eventBus} from "@/main";
export default {
name: 'chat',
props: ['chat'],
data() { return {
    message: ""
}},
methods:
{
    send()
    {
        eventBus.$emit("end", this.message)
    }
},
}

</script>

<style>
h1{
    color: orange;
}
</style>