import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

export default class ScrollBar {
    constructor (el, options = {}) {
        this.scrollbar = new SimpleBar(el, Object.assign(options, {}))
    }

    getScrollBar () {
        return this.scrollbar
    }
}
