import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  username: string = "";
  password: string = "";

  login() {
    this.$emit("loading-event", true);
    setTimeout(() => {
      this.$emit("loading-event", false);
      this.$emit("popup-message", {
        type: "success",
        text: "Success Logged in !",
      });
      this.$router.push("/");
    }, 500);
  }
}
