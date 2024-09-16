import { X } from "lucide-react"
import { SecurityForm } from "./formularios/SecurityForm"
import { useContext, useRef } from "react"
import { ModalContext } from "../context/ModalContext"
import { SendEmailForm } from "./formularios/SendEmailForm"
import { DataContext } from "../context/data/DataContext"
import styles from "../styles/modal.module.css"

export const Modal = () => {

    const { formData } = useContext(DataContext)
    const { passwordMatch, modalSwitchOff } = useContext(ModalContext)
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
                        email={formData.personalData.email}
                        obra={formData.clientData.obra}
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