<template>
   <nav>
      <v-toolbar flat app color="#181818">
         <v-toolbar-side-icon v-if="signedIn" @click="drawer = !drawer" class="grey--text">
            <v-icon v-if="drawer">arrow_back_ios</v-icon>
            <v-icon v-else>arrow_forward_ios</v-icon>
         </v-toolbar-side-icon>
         <v-toolbar-title class="text-uppercase grey--text">
            <router-link to="/" class="toolbar-title">
               <span class="font-weight-light">Code</span>
               <span>Wars</span>
            </router-link>
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <div v-if="signedIn">
            <v-btn @click="signOut" flat color="grey">
               <span>Sign Out</span>
               <v-icon right>exit_to_app</v-icon>
            </v-btn>
         </div>

         <!-- If signed out -->
         <div v-else>
            <v-btn @click="signIn" flat color="grey">
               <span>Sign In</span>
               <v-icon right>meeting_room</v-icon>
            </v-btn>
            <v-btn flat color="grey">
               <span>Join</span>
               <v-icon right>change_history</v-icon>
            </v-btn>
         </div>
      </v-toolbar>

      <v-navigation-drawer app v-model="drawer" class="primary">
         <v-layout column align-center>
            <v-flex class="mt-5">
               <h1 class="white--text font-weight-bold display-1">{{teamName}}</h1>
            </v-flex>
            <v-flex class="mb-2">
               <p class="caption font-weight-light">{{description}}</p>
            </v-flex>
            <!-- HP -->
            <v-flex>
               <v-tooltip right>
                  <template v-slot:activator="{ on }">
                     <v-chip label outline color="red" v-on="on">
                        <v-icon left color="red" class="mr-1">favorite</v-icon>
                        {{health}} / 100
                     </v-chip>
                  </template>
                  <span>Health points</span>
               </v-tooltip>
            </v-flex>
            <!-- Rank -->
            <v-flex>
               <v-tooltip right>
                  <template v-slot:activator="{ on }">
                     <v-chip label outline color="yellow" v-on="on">
                        <v-icon left color="yellow" class="mr-1">star</v-icon>
                        <span v-if="rank === 1">1st </span>
                        <span v-else-if="rank === 2">2nd </span>
                        <span v-else-if="rank === 3">3rd </span>
                        <span v-else>{{rank}}th </span>
                     </v-chip>
                  </template>
                  <span>Your rank</span>
               </v-tooltip>
            </v-flex>
            <!-- Attack Points -->
            <v-flex>
               <v-tooltip right>
                  <template v-slot:activator="{ on }">
                     <v-chip label outline color="green" v-on="on">
                        <v-icon left color="green" class="mr-1">monetization_on</v-icon>
                        {{points}} points
                     </v-chip>
                  </template>
                  <span>Use these at the shop!</span>
               </v-tooltip>
            </v-flex>
            <!-- Problems solved -->
            <v-flex class="mb-4">
               <v-chip label outline color="blue">
                  <v-icon left color="blue" class="mr-0">flash_on</v-icon>
                  <span v-if="solved > 0">{{solved}} challenge<span v-if="solved > 1">s</span> solved</span>
                  <span v-else>No challenges solved yet :(</span>
               </v-chip>
            </v-flex>
         </v-layout>
         <v-divider></v-divider>
         <v-list class="my-3">
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
               <v-list-tile-action>
                  <v-icon class="white--text">{{ link.icon }}</v-icon>
               </v-list-tile-action>
               <v-list-tile-content>
                  <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
               </v-list-tile-content>
            </v-list-tile>
         </v-list>
         <v-divider></v-divider>

      </v-navigation-drawer>
   </nav>
</template>

<script>
export default {
   data(){
      return {
         links: [
            { icon: 'code', text: 'Challenges', route: '/' },
            { icon: 'attach_money', text: 'Shop', route: '/shop' },
            { icon: 'flash_on', text: 'Actions', route: '/actions' },
            { icon: 'stars', text: 'Scoreboard', route: '/scoreboard' },
            { icon: 'people', text: 'Teams', route: '/teams' },
         ],
         signedIn: true,
         drawer: false,
         /* Dummy team data */
         teamName: "SKTelecom",
         description: "The cake is a lie, also you, also me",
         health: 90,
         points: 164,
         rank: 1,
         solved: 1
         // component(teamName,.. ) <-- general state VUEX <-- sqllite
         // GET REQUEST - Header(sktelecom)
         // return health points rank solved
      }
   },
   methods: {
      signIn(){
         this.signedIn = true
      },
      signOut(){
         this.signedIn = false
         this.drawer = false
      }
   }
}
</script>

<style >
.toolbar-title {
  color: grey;
  text-decoration: none;
}
</style>

