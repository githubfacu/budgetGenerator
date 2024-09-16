import { KeyRound } from "lucide-react"
import styles from "../../styles/securityForm.module.css"
import useInput from "../../hooks/useInput"
import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"

export const SecurityForm = () => {

    const { passwordMatchOn } = useContext(ModalContext)

    const clave = import.meta.env.VITE_CLAVE
    const password = useInput('text')

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (password.value === clave) {
            passwordMatchOn()
        }

        else{
            alert('Clave incorrecta')
        }
    }

  return (
    <form onSubmit={ handleSubmit } className={styles.passwordForm}>
        <div className={styles.inputContainer}>
            <label htmlFor="password" >CLAVE</label>
            <div className={styles.inputDiv}>
                <span>
                    <KeyRound strokeWidth={1.5}/>
                </span>
                <input 
                    id="password" 
                    {...password}
                />                          
            </div>
        </div>

        <button type="submit" className={styles.passButton}>Continuar</button>
    </form>
  )
}
