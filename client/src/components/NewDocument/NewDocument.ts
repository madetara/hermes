import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NewDocument extends Vue {
  @Prop() id: string = '';
}