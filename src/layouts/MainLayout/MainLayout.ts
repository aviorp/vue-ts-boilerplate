import { Component, Vue } from "vue-property-decorator";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Appbar from "@/components/Appbar/Appbar.vue";
import UserModule from "@/core/store/modules/user";
@Component({
  components: {
    Sidebar,
    Appbar,
  },
})
export default class MainLayout extends Vue {
  navs = [
    {
      groupTitle: "Navigation",
      navs: [
        {
          title: "Home Page",
          to: {
            name: "Home",
          },
        },
        {
          title: "About",
          to: {
            name: "About",
          },
        },
      ],
    },
  ];
  get userState() {
    return UserModule.getState;
  }
}
