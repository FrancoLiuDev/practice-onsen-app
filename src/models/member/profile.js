export default class Profile {
    constructor() {
        this._name = ''
        this._mobile = ''
        this._gender = ''
        this._nickname = ''
        this._addr = ''
    }
    static build() {
        return new Profile()
    }
    loadfromApi(model) {
        this._name = model.name
        this._mobile = model.mobile
        this._gender = model.gender
        this._nickname = model.nickname
        this._addr = model.addr
    }

    get name() {
        return this._name
    }
    get mobile() {
        return this._mobile
    }
    get gender() {
        return this._gender
    }
    get nickname() {
        return this._nickname
    }
    get addr() {
        return this._addr
    }

    set name(val) {
        this._name = val
    }
    set mobile(val) {
        this._mobile = val
    }
    set gender(val) {
        this._gender = val
    }
    set nickname(val) {
        this._nickname = val
    }
    set addr(val) {
        this._addr = val
    }

    pack() {
        return {
            mobile: this.mobile,
            name: this.name,
            gender: this.gender,
            nickname: this.nickname,
            addr: this.addr,
        }
    }
}