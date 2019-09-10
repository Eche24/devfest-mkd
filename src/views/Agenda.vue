<template>
  <v-content class="pa-0">

    <v-container fluid class="mt-3 mb-0">
      <v-layout wrap align-center justify-center row fill-height class="my-0">
        <v-flex xs12 md10 class="mb-0">
         <p class="google-font mb-0 mt-0 subheading " style="text-align:center;font-size:200%;color: rgb(13, 71, 161);">Agenda for devfest makurdi october 26th</p>
            
        </v-flex>
      </v-layout>
    </v-container>

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

  export default {
    components: {
      agenda,
     
    },
    data() {
      return {
        // ChapterDetails: ChapterDetails
      }
    },
  }
</script>
