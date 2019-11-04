import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

export default class ScrollBar {
    constructor (el, options = {}) {
        this.el = el
        this.options = options
        if (!options.forceObserver) SimpleBar.removeObserver()
        this.instance = this.getPluginInstance()
    }

    getPluginInstance () {
        return new SimpleBar(this.el, this.options)
    }

    recalculate () {
        this.instance.recalculate()
    }
}
