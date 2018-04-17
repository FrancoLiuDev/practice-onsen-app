class LocationModel {
    constructor(model) {
        if (!model) {
            this.init()
            return
        }
        this._province = model.province
        this._city = model.city
        this._area = model.area
    }
    init() {
        this._province = ''
        this._city = ''
        this._area = ''
    }
    set province(val) {
        this._province = val
    }
    set city(val) {
        this._city = val
    }
    set province(val) {
        this._area = val
    }
    get province() {
        return this._province
    }
    get city() {
        return this._city
    }
    get area() {
        return this._area
    }
}

export default LocationModel