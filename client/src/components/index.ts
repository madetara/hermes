import { Vue, Component } from "vue-property-decorator";
import NewDocument from "./NewDocument/NewDocument.vue";

@Component({
    components: {
        NewDocument
    }
})
export default class index extends Vue {
    
}