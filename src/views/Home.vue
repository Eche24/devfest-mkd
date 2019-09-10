<template>
  <v-content class="pa-0">
         
       
    <v-container fluid class="" mb-2>
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 >
           <hero />
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
          <About />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#F9F9F9" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <whatWeDo />
           <WhatCanYou />
        </v-flex>
      </v-layout>
    </v-container> 

  <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height class="">
        <v-flex xs12 md10 >
       <callForSpeaker /> 
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <v-divider></v-divider>
          <Share/>
        </v-flex>
      </v-layout>
    </v-container>
  
    <v-container fluid  style="background-color:#F9F9F9">
      <v-layout wrap align-start justify-start row fill-height>
        <v-flex xs12 md10 >
          <location />
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-container fluid >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <partners />
        </v-flex>
      </v-layout>
    </v-container>

    


  </v-content>
  
</template>

<script>
  import About from '@/components/home/about'
  import whatWeDo from '@/components/home/whatWeDo'
  import callForSpeaker from '@/components/home/callForSpeaker'
  import Share from '@/components/home/shareStory'
  import hero from '@/components/home/hero'
  import WhatCanYou  from '@/components/home/whatCanYou'
  import partners from '@/components/home/partners'
  import Location from '@/components/home/location'
  
  export default {
    components: {
      hero,
      About,
      whatWeDo,
      callForSpeaker,
      Share,
      WhatCanYou,
      partners,
      Location
    }
  }
</script>
