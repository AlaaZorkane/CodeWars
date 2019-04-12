<template>
  <v-layout row wrap align-center justify-center>
    <!-- Difficulty -->
    <v-flex md6>
      <v-tabs v-model="active" dark slider-color="purple" fixed-tabs grow>
        <v-tab class="uppercase" v-for="difficulty in difficulties" :key="difficulty.title">
          {{difficulty.title}}
        </v-tab>
      </v-tabs>
    </v-flex>
    <!-- UX Tool -->
  </v-layout>
</template>

<script>

export default {
  data(){
    return{
      difficulties: [
        {title: "easy"},
        {title: "medium"},
        {title: "hard"}
      ]
    }
  }
} 
</script>
