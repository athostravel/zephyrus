import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

export default class ScrollBar {
    constructor (selector, options = {}) {
        this.selector = selector
        this.options = options
        this.init()
    }

    init () {
        this.createScrollBar()
    }

    createScrollBar () {
        if (this.selector && this.selector.length !== undefined) {
            this.selector.forEach(el => this.getPluginInstance(el))
        } else if (this.selector) {
            this.getPluginInstance()
        }
    }

    getPluginInstance (el = this.selector) {
        return new SimpleBar(el, this.options)
    }
}
