import styles from '../../../styles/Game.module.css'
import { useEffect, useState } from 'react'
import Door from '../../../componentes/Door'
import { createDoors, updateDoors } from '../../../functions/door'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Game() {
    const router = useRouter()
    const [doors, setDoors] = useState([])
    const [valid, setValid] = useState(false)

    useEffect(() => {
        const doors = +router.query.doors
        const haveGift = +router.query.haveGift
        const qtdDoorValid = doors >= 3 && doors <= 100
        const haveGiftValid = haveGift >= 1 && haveGift <= doors

        setValid(qtdDoorValid && haveGiftValid)
    },[doors, router.query.doors, router.query.haveGift])

    useEffect(() => {
        const doors = +router.query.doors
        const haveGift = +router.query.haveGift
        setDoors(createDoors(doors, haveGift))
    },[router?.query])

    const renderDoors = () => {
        return doors.map(door => {
        return <Door 
                    key={door.number} 
                    value={door} 
                    onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
                />
        })
    }
  
    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {valid ? renderDoors() :
                 <h1>Inválid Values</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href='/' passHref>
                    <button>Reset Game</button>
                </Link>
            </div>
        </div>
    )
}