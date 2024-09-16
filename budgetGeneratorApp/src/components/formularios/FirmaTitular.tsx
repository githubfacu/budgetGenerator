import { useContext } from "react"
import { DataContext } from "../../context/data/DataContext"
import styles from "../../styles/individualInput.module.css"

export const FirmaTitular = () => {

  const { inputs } = useContext(DataContext)
  const { firmaTitular } = inputs

  return (
    <div className={styles.componentContainer}>
        <div className={styles.inputContainer}>
            <label htmlFor="firmaTitular" >Firma</label>
            <input 
                id="firmaTitular" 
                {...firmaTitular} 
            />
        </div>
    </div>
  )
}