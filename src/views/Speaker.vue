<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 ">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd"> </p>
            <p class="google-font mt-0 mb-0" style="font-size:110%">We have an amazing line-up of speakers from all aspect of the tech ecosystem. The present line-up includes speakers who are co-founders,Community Mentors,Software Innovators and research scholars. </p>
        </v-flex>
      </v-layout>
    </v-container>

  <v-divider></v-divider>

    <v-container fluid class="" style="" >
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10 class="">
          <speaker/>
        </v-flex>
      </v-layout>
    </v-container>

  </v-content>
  
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'

import speaker from '@/components/speaker/speaker'
  export default {
    components: {
      speaker
    },
    data() {
      return {
        ChapterDetails: ChapterDetails
      }
    },
  }
</script>
