<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="mb-0">
         <p class="google-font mb-0 mt-0 subheading " style="text-align:center;font-size:200%;color: rgb(13, 71, 161);">Agenda for devfest Makurdi october 26th 2019</p>
        </v-flex>
        <v-flex>
           <!-- <popup/> -->
        </v-flex>
      </v-layout>
    </v-container>
<v-divider></v-divider>
    <v-container fluid class="">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md12 class="">
          <agenda/>
        </v-flex>
      </v-layout>
    </v-container>

   

  </v-content>
  
</template>

<script>
// import ChapterDetails from '@/assets/data/agenda.json'
import agenda from '@/components/agenda/agenda'
import popup from '@/components/agenda/popup'

  export default {
    components: {
      agenda,
      popup,
     
    },
    data() {
      return {
        // ChapterDetails: ChapterDetails
      }
    },
  }
</script>
