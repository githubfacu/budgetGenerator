import styles from "../styles/modal.module.css"
import { X } from "lucide-react"
import { SecurityForm } from "./formularios/SecurityForm"
import { useContext, useRef } from "react"
import { Context } from "../context/Context"
import { SendEmailForm } from "./formularios/SendEmailForm"

interface ModalProps {
    email: string
    obra :string
}

export const Modal = ( { email, obra } : ModalProps ) => {

    const { passwordMatch, modalSwitchOff } = useContext(Context)
    const modalRef = useRef<HTMLDivElement>(null)

    // const handleClickOutside = (event: MouseEvent) => {

    //     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //         modalSwitchOff()
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     };
    //   }, [location]);
    
  return (
    <div className={styles.modalContainer}>
        <div className={styles.modalContent}
            style={{
                width: passwordMatch ? '100%' : '',
                maxWidth: passwordMatch ? '590px' : ''
            }}
            ref={modalRef}
        >
            {
                passwordMatch ?
                <div style={{width: '100%'}}>
                    <h2 style={{marginBottom: 12}}>Servicio de correo electrónico</h2>
                    <SendEmailForm 
                        email={email}
                        obra={obra}
                    />
                </div>
                :
                <SecurityForm />
            }

            <span className={styles.closeModalX} onClick={ modalSwitchOff }>
                <X size={32} strokeWidth={2.25}/>
            </span>
        </div>
    </div>
  )
}
