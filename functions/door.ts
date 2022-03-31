import DoorModel from "../model/door";

export function createDoors(qtde: number, doorWithGift: number): DoorModel[] {
    return Array.from({length: qtde}, (_, i) => {
        const number = i + 1
        const haveGift = number === doorWithGift
        return new DoorModel(number, haveGift)
    })
}

export function updateDoors(doors: DoorModel[], doorChanged: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const equal = currentDoor.number === doorChanged.number

        if(equal) {
            return doorChanged
        } 
        return doorChanged.open ? currentDoor : currentDoor.unSelect()
    })
}