<template>
  <v-layout column>
    <v-flex class="pb-3" align-self-center>
      <h1 class="text-uppercase font-weight-light">Challenges</h1>
    </v-flex>
    <!-- Difficulty -->
    <v-flex class="mx-5 px-5">
      <v-tabs v-model="active" slider-color="purple lighten-1" fixed-tabs grow>
        <v-tab class="text-uppercase" v-for="difficulty in difficulties" :key="difficulty.title">
          {{difficulty.title}}
        </v-tab>
      </v-tabs>
    </v-flex>
    <!-- UX Tool -->

    <!-- Challenges -->
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content  
          v-for="challenge in sortedChallenges" :key="challenge.id" 
          :class="{ 'green darken-3': data[challenge.id].solved }"
        >

          <!-- Challenge Icon -->
          <template v-slot:actions>
            <v-icon v-if="data[challenge.id].solved" color="white">done</v-icon>
            <v-icon v-else-if="data[challenge.id].attempts === 3" color="red lighten-1">remove_circle</v-icon>
            <v-icon v-else color="white">$vuetify.icons.expand</v-icon>
          </template>

          <!-- Challenge title -->
          <div slot="header" class="pt-1 font-weight-bold">
            {{ challenge.title }}
            <v-divider vertical></v-divider>

            <!-- Solved or not (connected team) -->
            <v-chip v-if="data[challenge.id].solved" label color="blue lighten-1">
              <v-icon left color="white" class="mr-1">star</v-icon>
              <span>Solved</span>
            </v-chip>

            <v-divider vertical></v-divider>
            
            <!-- if 0 attempts left -->
            <v-chip v-if="data[challenge.id].attempts === 3" label color="red darken-1">
              <v-icon left color="white" class="mr-1">clear</v-icon>
              <span>No more attempts left</span>
            </v-chip>
            <v-divider vertical></v-divider>
            <!-- Solved by? + First blood extra points -->
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-chip v-if="challenge.solvedBy.length>0" label color="green" v-on="on">
                  <v-icon left color="white" class="mr-1">golf_course</v-icon>
                  <span>{{challenge.solvedBy.length}} solve<span v-if="challenge.solvedBy.length > 1">s</span></span>
                </v-chip>
                <v-chip v-else label color="red" v-on="on">
                  <v-icon left color="white" class="mr-1">whatshot</v-icon>
                  <span>Not yet solved</span>
                </v-chip>
              </template>
              <span v-if="challenge.solvedBy.length>0">
                <span v-for="solver in challenge.solvedBy" :key="challenge.solvedBy.indexOf(solver)">
                  {{solver}}
                  <v-divider v-if="challenge.solvedBy.indexOf(solver)+1 < challenge.solvedBy.length"></v-divider>
                </span>
              </span>
              <span v-else>{{Math.round(challenge.prize/4)}} extra points for first solve!</span>
            </v-tooltip>
          </div>

          <!-- Challenge description -->
          <v-card color="grey darken-2">
            <v-card-text class="px-4 white--text font-weight-light">
              <div>{{ challenge.description }}</div>

              <!-- Submit Answer -->
              <Submit 
                :challengeID="challenge.id"
                :challengeTitle="challenge.title"
                :attempts="3 - data[challenge.id].attempts"
                v-if="!data[challenge.id].solved && data[challenge.id].attempts != 3"
              />

              <!-- Submit attempts -->

              <!-- Challenge extras -->
              <v-divider v-if="challenge.firstBlood != ''" class="my-2"></v-divider>
              <v-tooltip right color="white">
                  <template v-slot:activator="{ on }">
                    <v-chip class="mx-2" small v-if="challenge.firstBlood != ''" label color="white" v-on="on">
                      <v-icon left color="black" class="mr-1">assistant_photo</v-icon>
                      <span class="black--text font-weight-regular">{{challenge.firstBlood}}</span>
                    </v-chip>
                  </template>
                  <span class="black--text">First blood!</span>
              </v-tooltip>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>

  </v-layout>
</template>

<script>
import Submit from '../components/Submit'

export default {
  components: {
    Submit
  },
  data(){
    return{
      active: 0,
      on: null,
      submit: false,
      difficulties: [
        {title: "easy"},
        {title: "medium"},
        {title: "hard"}
      ],
      // Dummy Data

      // Challenges ( public data to all teams )
      // 0 = easy ; 1 = medium ; 2 = hard
      challenges:{
        easy:[
          {id:0, title:"Sum of integers", prize:50, bonus:20, event:false, firstBlood:"TheBigWeewees", solvedBy:["TheBigWeewees", "xRoots"], hintState:false, hint:"use your brain", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
          {id:1, title:"Sum of primes", prize:110, bonus:40, event:false, firstBlood:"xRoots", solvedBy:["xRoots"], hintState:false, hint:"The big weewee is never a biggest weewee", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
        ],
        medium: [
          {id:2, title:"Sum of books", prize:350, bonus:100, event:false, firstBlood:"", solvedBy:[], hintState:true, hint:"The hint is hidden in a rock", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
        ],
        hard: [

        ]
      },

      // Private data ( unique to connected team )
      data:[
        {id:0, attempts:1, solved: true},
        {id:1, attempts:2, solved: false},
        {id:2, attempts:3, solved: false}
      ]
    }
  },
  computed: {
    sortedChallenges: function() {
      switch(this.active){
        case 0: return this.challenges.easy; break;
        case 1: return this.challenges.medium; break;
        case 2: return this.challenges.hard; break;
      }
    },
    difficultyColor: function(){
      switch(this.active){
        case 0: return green; break;
        case 1: return yellow; break;
        case 2: return red; break;
      }
    }
  }
} 
</script>
