<template>
  <v-container class="pa-0">
    <p class="google-font" style="font-size:130%;">Volunteers</p>
    <v-divider></v-divider>
    <v-layout wrap align-start justify-start row fill-height class="mt-5 mb-0">
      <v-flex
        xs
        sm3
        md2
        lg2
        row
        v-for="(item,i) in TeamDetails"
        :key="i"
        class="text-xs-center"
      >
        <div class="text-xs-center ma-1 pa-1 py-2 my-0">
          <v-avatar size="130" tile="tile">
            <v-img :src="getImgUrl(item.profileImage)" :lazy-src="getImgUrl(item.profileImage)">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-avatar>
          <p class="mt-2 mb-0 google-font" style="font-size:120%">{{item.name}}</p>
          <p class="mt-1 mb-0 google-font">{{item.designation}}</p>

          <v-btn
            class="mt-0 mx-0"
            icon
            v-if="(item.twitter).length>0"
            :href="item.twitter"
            target="_blank"
          >
            <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
          </v-btn>

          <v-btn
            class="mt-0 mx-0"
            icon
            v-if="(item.linkedin).length>0"
            :href="item.linkedin"
            target="_blank"
          >
            <v-icon small style="color:#0077b5">fab fa-linkedin-in</v-icon>
          </v-btn>

          <v-btn
            class="mt-0 mx-0"
            icon
            v-if="(item.github).length>0"
            :href="item.github"
            target="_blank"
          >
            <v-icon small style="color:#333">fab fa-github</v-icon>
          </v-btn>
          <v-btn
            class="mt-0 mx-0"
            icon
            v-if="(item.website).length>0"
            :href="item.website"
            target="_blank"
          >
            <v-icon style="color:#333">link</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TeamDetails from "@/assets/data/volunteer.json";
export default {
  data() {
    return {
      TeamDetails: TeamDetails,
      showLoader: true,
      showData: false
    };
  },
  mounted() {},
  methods: {
    getImgUrl(pic) {
      if (pic.length > 0) {
        return require("@/assets/img/team/" + pic);
      } else {
        return require("@/assets/img/team/avatar.png");
      }
    }
  },
  filters: {
    summery: (val, num) => {
      return val.substring(0, num) + "..";
    }
  }
};
</script>
