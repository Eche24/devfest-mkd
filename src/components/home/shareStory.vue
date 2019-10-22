<template>
   <v-layout wrap align-center justify-center row fill-height >
      <v-flex xs12 md9 lg9 class=" text-xs-center mt-2">
        <p class="google-font" style="font-size:170%">Share your story</p>
         


         <p class="google-font" style="font-size:130%" >
            <span v-for="(item,i) in ChapterDetails.socialLinks" :key="i">
              <v-tooltip top>
                  <v-btn flat icon :href="item.link" target="_blank" slot="activator">
                    <v-icon>{{item.icon}}</v-icon>
                  </v-btn>
                  <span>{{item.name}}</span>
              </v-tooltip>
            </span>
          </p>
          <p
           class="google-font"
          style="font-size:120%"
            
          >Share your experience at <b> DevFest Makurdi 19 </b>and what you loved/ did not love about the event.  </p>
        <p
          class="google-font"
          style="font-size:110%"
        >We would be looking forward to hearing your DevFest Stories and how that has shaped your actions, work, passion and maybe life in general. Made some amazing friends at DevFest? Tell us about that</p>
        <v-btn  :href="ChapterDetails.feedback
" target="_blank" 
class="ma-0 google-font elevation-1"
 color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white"> give us feedback</v-btn>
      </v-flex>
    
      
    </v-layout>
</template>

<script>
  
  import FooterData from '@/assets/data/footer.json'
  import ChapterDetails from '@/assets/data/chapterDetails.json'
  export default {
    data() {
      return {
          ChapterDetails:ChapterDetails,
        FooterData:FooterData
      }
    },
  }
</script>