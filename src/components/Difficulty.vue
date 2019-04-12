<template>
   <v-tabs v-model="active" dark slider-color="purple" fixed-tabs grow>
      <v-tab v-for="difficulty in difficulties" :key="difficulty.title" ripple>
         {{difficulty.title}}
      </v-tab>
   </v-tabs>
</template>

<script>

export default {
   data(){
      return{
         difficulties: [
            {title: "Easy", text: "lorem easy"},
            {title: "Medium", text: "lorem medium"},
            {title: "Hard", text: "lorem hard"}
         ]
      }
   }
}
</script>