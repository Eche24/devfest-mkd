<template>
  <v-toolbar
    app
     color="white"
    height="55px"
    scroll-off-screen
    style=" box-shadow: #ffffff0a 1px 1px 1px;"
  >
    <!-- <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"

    /> -->
     <img src="@/assets/img/logo.png" width="40vh"/>
    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <span class="google-font" style="color:#00695C;font-weight: 400;" dark>{{ChapterDetails.ChapterName}}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;" 
        color="dark"
        flat
        @click="onClick($event, link)"
    
        
      >
        {{ link.text }}
    </v-btn>

  
  </v-toolbar>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        ChapterDetails:ChapterDetails
      }
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
  }
</script>
