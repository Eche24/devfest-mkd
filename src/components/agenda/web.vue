<template>
<v-container class="pa-0 my-0">
        <v-layout  class="my-0 mt-2" >
            <v-flex  class="pa-2 my-0" >
     <div style="border-radius: 5px; border:1px solid #e0e0e0;min-height:180px" class="ma-1 pa-5" v-for="person in schedule2019.slice().reverse()" :key="person.sessionId">
              <v-layout row wrap justify-center align-self-center >
                         <v-flex xs12 sm2 md2  >
                           <v-responsive>
                            <v-avatar color="grey lighten-2 my-auto" size="110" tile="tile">
                             <v-img
                               :src ="person.sessionImage"
                                :lazy-src="person.sessionImage"
                               >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-layout>
                        
                        </v-img>
                        </v-avatar> 
                       </v-responsive>
                         </v-flex>
                         <v-flex xs12  sm6 md7 class="">
                             <div class="google-font"  style="font-size:100%;color: rgb(13, 71, 161);">{{person.sessionDesc}}</div>
                             <div class="google-font text--light-blue lighten-1" style="font-size:110%; text-transform: capitalize;"> by {{person.speakerName}}</div>
                            <div class="caption grey--text google-font" >{{person.sessionTitle}}</div>
                         </v-flex>
                         <v-flex xs12 sm2 md2>
                            <v-chip color="green" class="ma-1 " outline small>time: {{person.sessionStartTime}}</v-chip>
                            <v-chip color="red" class="ma-1 left" outline small> duration: {{person.sessionTotalTime}}</v-chip>
                         </v-flex>   
                                            
              </v-layout>  
             
            </div>
           
            </v-flex>
        </v-layout>
</v-container>
</template>
<script>
import db from '@/fb'
export default {
    data() {
       return {
           schedule2019:[]
       }
    },
  created () {
    db.collection("schedule2019").where("track", "==",'web')
    //  .orderBy("", "desc")
    .onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added'){
          this.schedule2019.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>