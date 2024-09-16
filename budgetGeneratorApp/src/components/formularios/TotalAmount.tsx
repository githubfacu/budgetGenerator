import { useContext } from "react"
import styles from "../../styles/individualInput.module.css"
import { DataContext } from "../../context/data/DataContext"

export const TotalAmount = () => {

  const { inputs } = useContext(DataContext)
  const { totalAmount } = inputs

  return (
    <div className={styles.componentContainer}>
        <div className={styles.inputContainer}>
            <label htmlFor="totalAmount" >Monto Total</label>
            <input 
                id="totalAmount" 
                {...totalAmount} 
            />
        </div>
    </div>
  )
}