<template>
  <v-container>
    <!-- <h1 class="subheading blue--text">coming soon</h1> -->
    <v-layout row wrap fill-height>
      <v-flex xs12 sm6 md6 lg4 v-for="person in speakers2019" :key="person.id">
        <v-card class="text-xs-center ma-3 mx-auto" max-width="344" height=370 >
          <v-responsive class="pt-4">
            <v-avatar size="150" class="grey lighten-2">
              <v-img :src="person.speakerImage" :lazy-src="person.speakerImage">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading google-font">{{person.speakerName}}</div>
            <div class="grey--text font-weight-medium google-font">{{person.speakerDesc}}</div>

            <div class="blue-grey--text text-xs-center font-weight-light google-font" >{{person.speakerSession}}</div>

            <!-- <v-chip color="teal lighten-3" class="mt-2" outline small>
              <span> Talk time :</span>
              <span class="teal--text google-font" >{{person.time}} </span>
            </v-chip> -->
          </v-card-text>

          <v-btn class="mt-0 mx-0" icon :href="person.twitterUrl" target="_blank">
            <v-icon small center style="color:#1da1f2">fab fa-twitter</v-icon>
          </v-btn>

          <v-btn class="mt-0 mx-0" icon :href="person.linkedinUrl" target="_blank">
            <v-icon small center style="color:#0077b5">fab fa-linkedin-in</v-icon>
          </v-btn>

          <!-- <v-btn class="mt-0 mx-0 flat" icon :href="person.github" target="_blank">
            <v-icon small style="color:#333">fab fa-github</v-icon>
          </v-btn> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import db from "@/fb";

export default {
  data() {
    return {
      speakers2019: [],
      tile: false,
      img: true,
      
    };
  },
  created() {
    db.collection("speakers2019")
      // .orderBy("name", "asc")
      .onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === "added") {
            this.speakers2019.push({
              ...change.doc.data(),
              id: change.doc.id
            });
          }
        });
      });
  }
};
</script>