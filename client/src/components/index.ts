import { Vue, Component } from "vue-property-decorator";
import NewDocument from "./NewDocument/NewDocument.vue";
import NavigationPanel from "./NavigationPanel/NavigationPanel.vue";
import '../../normalize.css';

@Component({
    components: {
        NewDocument,
        NavigationPanel
    }
})
export default class index extends Vue {
    
}