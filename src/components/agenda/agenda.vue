<template>
    
      <v-card class="elevation-0">
    <v-tabs
      v-model="tab"
      style = "background-color:grey lighten-3;"
      centered
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        cloud & Main
      </v-tab>

      <v-tab href="#tab-2">
        Web & More
      </v-tab>

      <v-tab href="#tab-3">
        Mobile
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
       <v-tab-item
        value="tab-1"
      >
        <v-card  flat class="elevation-0 pa-2 mx-auto" max-width="750">  
            <CloudMl/> 
        </v-card> 
      </v-tab-item>
      <v-tab-item
        value="tab-2"
      >
        <v-card  flat class="elevation-0 pa-2 mx-auto" max-width="750">
               <Web/>      
        </v-card>   
      </v-tab-item>    
      <v-tab-item
        value="tab-3"
      >
         <v-card  flat class="elevation-0 pa-2 mx-auto" max-width="750">
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
      CloudMl,
      Web,
      Mobile,
   },
    data() {
        return {
            tab: null,       
            
        }
    }

}
</script>
