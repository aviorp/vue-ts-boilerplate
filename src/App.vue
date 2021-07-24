<template>
  <v-app>
    <Loading v-if="isLoading" />
    <Popup v-if="type && text" :type="type" :text="text" />
    <v-main>
      <router-view
        @loading-event="onLoading($event)"
        @popup-message="onMessage($event)"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loading from "@/components/Loading/Loading.vue";
import Popup from "@/components/Popup/Popup.vue";
import { PopupI } from "./interfaces";
@Component({
  components: {
    Loading,
    Popup,
  },
})
export default class App extends Vue {
  isLoading: boolean = false;
  type: string = "";
  text: string = "";

  onLoading(condition: boolean) {
    this.isLoading = condition;
  };

  onMessage({ type, text }: PopupI) {
    this.type = type;
    this.text = text;
    setTimeout(() => {
      this.type = "";
      this.text = "";
    }, 3000);
  }
}
</script>
