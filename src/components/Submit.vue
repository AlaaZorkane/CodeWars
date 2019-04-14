<template>
  <div>
    <v-divider class="my-2"></v-divider>
    <v-dialog light max-width="600px" v-model="dialog">
      <!-- parent Submit button -->
      <v-btn :disabled="disabled" depressed class="white--text mr-1" slot="activator" color="blue">
        <v-icon class="pr-2">done_all</v-icon>
        Submit answer
      </v-btn>

      <!-- Dialog content -->
      <v-card>
        <!-- Dialog title -->
        <v-card-title>
            <h2>{{challengeTitle}}</h2>
        </v-card-title>
        <v-card-text>
          hello
          <!-- Submit Form
          <v-form class="px-3" ref="form">
            
          </v-form> -->

        </v-card-text>
      </v-card>
    </v-dialog>
    <v-tooltip right color="white">
      <template v-slot:activator="{ on }">
        <v-chip class="py-c px-1" color="red" label v-on="on">
          <span class="white--text font-weight-bold subheading">{{ attempts }}</span>
        </v-chip>
      </template>
      <span class="black--text">attempt<span v-if="attempts>1">s</span> left!
      </span>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    disabled: Boolean,
    challengeID: Number,
    attempts: Number,
    challengeTitle: String
  },
  data(){
    return{
      dialog: null,
      on: null
    }
  }
}
</script>
<style>
  .py-c {
    padding-bottom: 2.5px;
    padding-top: 2.5px
  }
</style>

