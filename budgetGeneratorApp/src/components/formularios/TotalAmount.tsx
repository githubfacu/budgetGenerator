import useInput from "../../hooks/useInput"
import styles from "../../styles/individualInput.module.css"

interface TotalAmountProps {
    totalAmount: ReturnType<typeof useInput>
}

export const TotalAmount = ( {totalAmount} : TotalAmountProps ) => {

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
