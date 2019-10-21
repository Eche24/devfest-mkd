<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
         
            <v-flex xs12 md12 lg12 class="pa-2">
                <p class="google-font mb-1" style="font-weight: 350; text-align:center; color: #0D47A1;font-size:300%;">Welcome GDG DevFest Makurdi 2019
                   <p class="google-font" style="text-align: center; font-size:110%;color:#9e9e9e">
                    <span v-for="(item,i) in chapterDetails.ChapterHashTags" :key="i">
                        #{{item}} &nbsp;
                    </span>
                </p>
                               
                <p class="google-font" style="font-size:110%">{{chapterDetails.ChapterShortDescription}}<br>
                Join us on <b>, 26 October, 2019 at makurdi, benue state</b> for a day filled with amazing Tech talks and demos.              
                </p>           

            </v-flex>
            <v-row class="">
                <v-btn :href="chapterDetails.register" target="_blank" class="ma-0 google-font elevation-1 " color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white" >Register for event</v-btn>
            </v-row>
        </v-layout>

    </v-container>
</template>

<script>
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails
        }
    },
}
</script>
