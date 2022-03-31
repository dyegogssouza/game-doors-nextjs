import styles from '../styles/Form.module.css'
import Card from "../componentes/Card";
import Link from 'next/link'
import InputNumber from '../componentes/InputNumber';
import { useState } from 'react';

export default function Form() {
  const [qtdDoors, setQtdDoors] = useState(3)
  const [withGift, setWithGift] = useState(1)
  
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor='#c0392c'>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber 
            text='Qtd Doors?' 
            value={qtdDoors} 
            onChange={newQtd => setQtdDoors(newQtd)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber 
            text='Door with Gift?' 
            value={withGift} 
            onChange={door => setWithGift(door)}
          />
        </Card>
        <Card bgcolor='#25a085'>
          <Link href={`/game/${qtdDoors}/${withGift}`} passHref>
              <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}