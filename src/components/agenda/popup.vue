<template>
  <v-dialog max-width="600">
    <v-btn outline href slot="activator">add agenda</v-btn>
    <v-card>
      <v-card-title>Add Agenda 2019</v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="sessionId"
            v-model="sessionId"
            class="pa-2"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field label="track" v-model="track" prepend-icon="edit" :rules="inputRules"></v-text-field>
          <v-text-field
            label="sessionDesc"
            v-model="sessionDesc"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="sessionImage"
            v-model="sessionImage"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="sessionStartTime"
            v-model="sessionStartTime"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="sessionTitle"
            v-model="sessionTitle"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="sessionTotalTime"
            v-model="sessionTotalTime"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="speakerDesc"
            v-model="speakerDesc"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="speakerName"
            v-model="speakerName"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="speakerImage"
            v-model="speakerImage"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="twitterUrl"
            v-model="twitterUrl"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            label="linkedUrl"
            v-model="linkedUrl"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-text-field>
          <v-btn class="mx-0 mt-3" outline color="indigo" @click="submit">add agenda</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import db from "@/fb";
export default {
  data() {
    return {
      sessionId: "",
      track: "",
      sessionImage:"",
      sessionStartTime:"",
      sessionTitle:"",
      sessionTotalTime:"",
      sessionDesc:"",
      speakerDesc:"",
      speakerName:"",
      speakerImage:"",
      twitterUrl:"",
      linkedUrl:"",

      inputRules: [v => v.length >= 2 || "Minimun length is 2 characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const schedule = {
          sessionId: this.sessionId,
          track: this.track,
          sessionImage: this.sessionImage,
          sessionStartTime: this.sessionStartTime,
          sessionTitle: this.sessionTitle,
          sessionTotalTime: this.sessionTotalTime,
          sessionDesc: this.sessionDesc,
          speakerDesc: this.speakerDesc,
          speakerName: this.speakerName,
          speakerImage: this.speakerImage,
          twitterUrl: this.twitterUrl,
          linkedUrl: this.linkedUrl
        };
        db.collection("schedule2019")
          .add(schedule)
          .then(() => {
            console.log("added to database");
          });
      }
    }
  }
};
</script>