<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height>
      <v-flex xs12 sm5 md3 lg3 xl3 class="text-xs-center pa-3 hidden-sm-and-down" pl-2>
        <v-img
          :src="require('@/assets/img/gdg.jpg')"
          :lazy-src="require('@/assets/img/gdg.jpg')"
          width="100%"
          height="300"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg8 xl8 style="margin-left:20px">
        
        <p class="google-font mt-0 " style="font-size:120%">
          While no two DevFests will be exactly alike, each at its core is powered by a shared belief that 
          when developers come together to exchange ideas, amazing things can happen
          if you would like to be a speaker or do a showcase for your organize contact us</p>
    
        <v-btn
          :href="chapterDetails.speakerList"
          target="_blank"
          round
          color="green"
          style="text-transform: capitalize;border-radius:5px;"
          outline
          class="ml-0 center"
          dark
          
        >see list speaker</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails
    };
  }
};
</script>
