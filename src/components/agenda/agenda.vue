<template>
    
      <v-card class="elevation-0">
    <v-tabs
      v-model="tab"
      style = "background-color:grey lighten-3;"
      centered
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        web track
      </v-tab>

      <v-tab href="#tab-2">
        cloud/ml track
      </v-tab>

      <v-tab href="#tab-3">
        mobile track
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        value="tab-1"
      >
      
      
        <v-card  flat class="elevation-0 pa-3 mx-auto" max-width="900">
               <Web/>      
        </v-card>
        
      </v-tab-item>

      <v-tab-item
        value="tab-2"
      >
        <v-card  flat class="elevation-0 pa-3 mx-auto" max-width="900">  
            <CloudMl/> 
        </v-card> 
      </v-tab-item>
          
      <v-tab-item
        value="tab-3"
      >
         <v-card  flat class="elevation-0 pa-3 mx-auto" max-width="900">
           <Mobile/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import db from '@/fb'
import Web from '@/components/agenda/web'
import CloudMl from '@/components/agenda/cloudMl'
import Mobile from '@/components/agenda/mobile'
export default {
  components: {
      Web,
      CloudMl,
      Mobile,
   },
    data() {
        return {
            tab: null,       
            agenda: []
        }
    },
  created () {
    db.collection('agenda').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
          this.agenda.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>
