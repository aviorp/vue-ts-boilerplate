import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    user: {
      type: Object,
      default: {},
    },
  },
})
export default class Appbar extends Vue {
  @Prop() title!: string;
}
