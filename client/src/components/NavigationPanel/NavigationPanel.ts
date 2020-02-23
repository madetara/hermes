import { Guid } from 'guid-typescript';
import { Vue, Component } from "vue-property-decorator";

@Component
export default class NavigationPanel extends Vue {
    createNewDocument() {
        const guid = Guid.create();

        this.$store.dispatch("createNewDocument", {
            guid
        });
    }
}