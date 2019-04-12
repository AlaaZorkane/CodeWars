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
            <v-btn flat color="grey">
               <span>Live Game</span>
               <v-icon right>open_in_new</v-icon>
            </v-btn>
            <v-btn @click="signedIn = !signedIn" flat color="grey">
               <span>Sign Out</span>
               <v-icon right>exit_to_app</v-icon>
            </v-btn>
         </div>


         <!-- If signed out -->
         <div v-else>
            <v-btn @click="signedIn = !signedIn" flat color="grey">
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
            <v-flex class="my-5">
               <p class="white--text subheading mt-1">{{teamName}}</p>
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
            { icon: 'stars', text: 'ScoreBoard', route: '/scoreboard' },
            { icon: 'people', text: 'Teams', route: '/teams' },
         ],
         signedIn: true,
         drawer: false,
         teamName: "SK Telecom"
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

