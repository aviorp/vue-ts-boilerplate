<template>
  <v-container fluid>
    <div class="pa-4">
      <slot name="title"></slot>
      <v-breadcrumbs :items="$route.meta.breadcrumbs"></v-breadcrumbs>
      <v-card class=" pa-4">
        <slot></slot>
      </v-card>
      <slot name="footer" class="d-flex justify-end"> </slot>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["breadcrumbs"],
})
export default class PageLayout extends Vue {
  created() {
    console.log(this.$route);
  }
}
</script>
