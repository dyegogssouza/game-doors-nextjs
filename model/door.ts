export default class DoorModel {
    #number: number
    #haveGift: boolean
    #selected: boolean
    #open: boolean

    constructor(numero: number, haveGift = false, selected = false, open = false) {
        this.#number = numero
        this.#haveGift = haveGift
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number
    }

    get haveGift() {
        return this.#haveGift
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    get close() {
        return !this.#open
    }

    unSelect() {
        const selected = false
        return new DoorModel(this.number, this.haveGift, selected, this.open)
    }

    toggleSelect() {
        const selected = !this.selected
        return new DoorModel(this.number, this.haveGift, selected, this.open)
    }

    openDoor() {
        const open = true
        return new DoorModel(this.number, this.haveGift, this.selected, open)
    }
}