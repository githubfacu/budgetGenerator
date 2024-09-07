import useInput from "../../hooks/useInput"
import styles from "../../styles/individualInput.module.css"

interface FirmaTitularProps {
    firmaTitular: ReturnType<typeof useInput>
}

export const FirmaTitular = ( { firmaTitular } : FirmaTitularProps ) => {

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