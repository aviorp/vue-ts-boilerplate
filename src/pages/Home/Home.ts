import { Component, Vue } from "vue-property-decorator";
import PageLayout from "@/layouts/PageLayout/PageLayout.vue";
@Component({
  components: {
    PageLayout,
  },
})
export default class Home extends Vue {
  message: string = "Home Component !";
}
