import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
  theme: {
    themes: {
      light: {
        primary: "#0747a6",
        secondary: "#091e42",
        error: "#ff5630",
        warning: "#ffab00",
        accent: "",
        info: "#00b8d9",
        success: "#36b37e",
        background: "#ebecf0",
      },
    },
  },
});
