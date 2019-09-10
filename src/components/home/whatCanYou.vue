<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-center justify-center row fill-height class="mt-2" style="background-color:#FAFAFA">
            <v-flex xs12 sm4 md4 lg4 class=""  style="padding-right: 24px;padding-bottom: 24px;">
               <p class="google-font" style="font-size:180%">What you can expect from DevFest?</p>
               <p class="google-font" style="font-size:110%">
                   1. A days filled with fun-filled activities.<br>
                   2. Networking with other developers and amazing speakers.<br>
                   3. Swags and awesome food.<br>
                   4. A live hackathon with amazing prizes.
                    </p>
            </v-flex>
           <v-flex xs12 sm8 md8 lg8 class=" px-3" style="padding-top: 24px;" >
               <v-card
             elevation="24"
            max-width="700"
            class="mx-auto"
          >
      <v-carousel hide-delimiters height="330" :touch="right" style="margin-bottom: 4em;">
       <v-carousel-item
       v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"  
    >
    </v-carousel-item>
  </v-carousel>
  </v-card>             
            </v-flex> 
        </v-layout>

    </v-container>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: '',
          },
        ],
      }
    },
  }
</script>
