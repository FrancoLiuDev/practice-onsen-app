import pageDelegate from "@Delegate/pageDelegate"
export default {
    props: ["title", "evtBack", "icons"],
    mixins: [pageDelegate],
    methods: {
        onNaviClicked() {
            if (this.evtBack)
                this.$emit("evtBack")
            else
                this.popPage()
        }
    }
}