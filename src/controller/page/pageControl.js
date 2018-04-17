import pageDelegate from "@Delegate/pageDelegate"
import warnboxDelegete from "@Delegate/warnboxDelegete"

export default {
    providers: ["pages"],
    data() {
        return {
            pageId: "",
            resultListenFrom: [],
        }
    },
    mixins: [pageDelegate, warnboxDelegete],
    mounted() {
        this.initOnsenPage()
    },
    methods: {
        initOnsenPage() {
            this.pageId = this.pageProp.id

            if (this.pageProp.pageListen) {
                this.resultListenFrom = this.pageProp.pageListen
            }

            document.addEventListener("init", event => {
                if (event.target.matches(this.pageId)) {
                    if (this.pagedInit) this.pagedInit()
                }
            })
            document.addEventListener("show", event => {
                if (event.target.matches(this.pageId)) {
                    if (this.pagedShow) this.pagedShow()
                    if (this.pageResult == null) return

                    this.resultListenFrom.forEach(tagId => {
                        if (this.pageResult[tagId]) {
                            if (this.onPageResult) this.onPageResult(this.pageResult)
                        }
                    })
                }
            })
            document.addEventListener("hide", event => {
                if (event.target.matches(this.pageId)) {
                    if (this.pagedHide) this.pagedHide()
                }
            })
            document.addEventListener("destroy", event => {
                if (event.target.matches(this.pageId)) {
                    if (this.pagedDestroy) this.pagedDestroy()
                }
            })
        },
        navigatePage(name, data, replace = false) {
            console.log('navigatePage', data)
            var self = this
            var newPage = {
                extends: this.pages[name].view,
                data() {
                    return {
                        data: data,
                        pageProp: self.pages[name].pageProp
                    }
                }
            }

            if (replace == true)
                this.replacePage(newPage)
            else
                this.pushPage(newPage)

        },
        navigateBack(data) {
            this.popPage(data)
        },
        navigateAsHome(name, data) {
            var self = this
            var newPage = {
                extends: this.pages[name].view,
                data() {
                    return {
                        data: data,
                        pageProp: self.pages[name].pageProp
                    }
                }
            }
            this.resetPage(newPage)
        }

    }
}