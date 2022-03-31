import styles from '../styles/Card.module.css'

interface CartaoProps {
    bgcolor?: string
    children?: any
}

export default function Card(props: CartaoProps) {
    return (
        <div className={styles.card} 
            style={{ 
                backgroundColor: props.bgcolor ?? '#fff'
             }}
        >
            {props.children}
        </div>
    )
}