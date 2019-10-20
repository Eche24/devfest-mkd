<template>
  <v-content class="pa-0">

    <v-container fluid class="pt-3 mb-0 ">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="my-0">
            <p class="google-font mb-0" style="font-size:200%;color:#0277bd"> devfest makurdi 2019</p>
            <p class="google-font mt-0 mb-0" style="font-size:110%"> awesome speaker </p>
        </v-flex>
      </v-layout>
    </v-container>

  

    <v-container fluid class="" style="background-color:#fafafa;" >
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
