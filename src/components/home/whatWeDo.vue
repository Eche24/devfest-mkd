<template>
    <v-container class="pa-0">
        <v-layout wrap align-center justify-center row fill-height >
           <v-row xs12 md3 lg3 class="">
               <p class="google-font" style="font-size:180%">What happens at Devfest?</p>
               <p class="google-font" style="font-size:110%">
                    DevFests are events where we come together to learn from each other.

                          The motive is to create a local ecosystem of Developers 
                             and give them a platform to Interact and Network. 
                             We talk about various cutting-edge technologies.</p>

                <span v-for="(item,i) in whatWeDoData" :key="i">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }" >
                            <a :href="item.link" target="_blank" flat class="ma-0">
                                <img :src="getImgUrl(item.image)" width="30vh" alt="" srcset="" dark v-on="on">
                            </a> 
                            &nbsp;&nbsp;&nbsp;
                        </template>
                        <span>{{item.TechName}}</span>
                    </v-tooltip>
                </span>               
                <br><br>
            </v-row>          
            </v-layout>
    </v-container>
</template>

 

<script>
import whatWeDoData from '@/assets/data/whatWeDoComponentData.json'
import ChapterDetails from '@/assets/data/chapterDetails.json'
export default {
    data() {
        return {
            chapterDetails: ChapterDetails,
            whatWeDoData: whatWeDoData
        }
    },
    methods:{
        getImgUrl(url) {
            if(url.length>0){
                return require('@/assets/img/what-we-do/'+url)
            }else{
                return require('@/assets/img/what-we-do/notFound.png')
            }
        },
    }
}
</script>
