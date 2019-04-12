<template>
   <v-container fluid fill-height>
      <v-layout align-center justify-center>
         <v-flex xs12 sm6 md4>
            <v-card light>
               <v-card-title primary-title>
                     <h3 class="headline pl-1">Connect to server</h3>
               </v-card-title>
               <v-text-field v-model="ip" name="ip" label="IP Address" class="px-4"></v-text-field>
               <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="sendip" outline color="primary" class="uppercase mb-2 mr-2">connect</v-btn>
               </v-card-actions>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>

export default {
   data(){
      return{
         ip: ""
      }
   },
   methods: {
      sendip(){
         console.log("Connected to ip " + this.ip)
      }
   }
}

</script>

