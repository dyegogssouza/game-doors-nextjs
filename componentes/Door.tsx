import DoorModel from '../model/door'
import styles from '../styles/Door.module.css'
import Gift from './Gift'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''

    const toogleSelect = e => props.onChange(door.toggleSelect())
    const open = e => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }

    const renderDoor = () => {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.handle} onClick={open}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toogleSelect}>
            <div className={`${styles.structure} ${selected}`}>
                {door.close ? renderDoor() : door.haveGift && <Gift />}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}