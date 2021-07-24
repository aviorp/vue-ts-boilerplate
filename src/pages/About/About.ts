import { Component, Vue } from "vue-property-decorator";
import PageLayout from "@/layouts/PageLayout/PageLayout.vue";
import UserModule from "@/core/store/modules/user";
@Component({
  components: {
    PageLayout,
  },
})
export default class About extends Vue {
  get userState() {
    return UserModule.getState;
  }

  setUser() {
    UserModule.setUser({
      firstName: "Avior",
      lastName: "Peretz",
      id: "1",
    });
  }
}
