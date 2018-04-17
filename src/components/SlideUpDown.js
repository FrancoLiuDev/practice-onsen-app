export default {
    /* to use
        <SlideUp :active="show" :duration="600">
        <div class="element">
            Hello there!
        </div>
        </SlideUp>
    */
    name: "SlideUpDown",
    props: {
        active: Boolean,
        duration: {
            type: Number,
            default: 500
        }
    },

    data: () => ({
        maskHeight: 0,
        maxHeight: 0,
        offsetHeight: 0
    }),

    render(h) {
        return h(
            "div", {
                style: this.stylemask,
                ref: "mask"
            }, [
                h(
                    "div", {
                        style: this.style,
                        ref: "container"
                    },
                    this.$slots.default
                )
            ]
        )
    },
    mounted() {
        this.render()
    },
    watch: {
        active() {
            this.render()
        }
    },
    computed: {
        style() {
            return {
                position: "absolute",
                bottom: "0px",
                left: "0px",
                right: "0px",
                overflow: "hidden",
                "transition-property": "all",
                height: this.maxHeight + "px",
                "transition-duration": this.duration + "ms"
            }
        },
        stylemask() {
            var self = this
            return {
                "z-index": "2",
                position: "absolute",
                "background-color": "#00000022",
                height: this.maskHeight,
                bottom: "0px",
                left: "0px",
                right: "0px",
                overflow: "hidden"
            }
        }
    },

    methods: {
        render() {
            const { mask, container } = this.$refs
            if (this.active) {
                const style = container.getAttribute("style")
                container.removeAttribute("style")
                this.maxHeight = container.offsetHeight
                this.maskHeight = '100%'
                container.setAttribute("style", style)
                    // call this explicitely to force a new layout

                this.offsetHeight = container.offsetHeight
            } else {
                setTimeout(() => {
                    this.maskHeight = 0
                }, this.duration - 50)
                this.maxHeight = 0
            }
        }
    }
}