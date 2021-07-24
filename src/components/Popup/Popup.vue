<template>
  <v-snackbar :value="true" timeout="3000" right :color="type">
    <v-icon class="mx-4 justify-center" v-if="type === 'success'"
      >mdi-check-circle-outline</v-icon
    >
    <v-icon class="mx-4 justify-center" v-if="type === 'error'"
      >mdi-alert-circle-outline</v-icon
    >
    <v-icon class="mx-4 justify-center" v-if="type === 'info'"
      >mdi-information-outline</v-icon
    >
    <span>{{ text }} </span>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
export default class Popup extends Vue {}
</script>
