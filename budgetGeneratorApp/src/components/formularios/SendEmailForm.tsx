
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import useInput from '../../hooks/useInput';
import styles from '../../styles/sendEmailForm.module.css'
import { useSendBudgetEmail } from '../../hooks/useSendBudgetEmail';

interface EmailFormProps {
    email: string
    obra: string
}

export const SendEmailForm = ( { email, obra } : EmailFormProps ) => {

    const { modalSwitchOff } = useContext(ModalContext)

    const remitente = useInput('text', email);
    const destinatarios1 = useInput('text', email);
    const destinatarios2 = useInput('text');
    const destinatarios3 = useInput('text');
    const asunto = useInput('text', 'presupuesto');
    const mensaje = useInput('text');

    const {
        loading,
        error,
        success,
        previewUrl,
        feedMessage,
        sendEmail
    } = useSendBudgetEmail();

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        const destinatarios = [
            destinatarios1.value,
            destinatarios2.value,
            destinatarios3.value
        ]
            .filter(Boolean)
            .join(',');

        if (!destinatarios) {
            alert('Debe ingresar al menos un destinatario.');
            return;
        }

        try {

            await sendEmail({
                elementId: 'documentPDF',
                fileName: `presupuesto-${obra
                    .trim()
                    .replace(/\s+/g, '-')
                    .toLowerCase()}.pdf`,
                from: remitente.value,
                to: destinatarios,
                subject: asunto.value,
                message: mensaje.value,
            });

        } catch {
            // error ya manejado en hook
        }
    };


  return (
    <form onSubmit={ handleSubmitForm } className={styles.sendEmailFormContainer}>
        <div className={styles.fieldDiv}>
            <label htmlFor="remitente">De</label>
            <input id="remitente" {...remitente}/>
        </div>
        <div className={styles.fieldDiv}>
            <label htmlFor="destinatarios1">Destinatario 1</label>
            <input id="destinatarios1" {...destinatarios1}/>
        </div>
        <div className={styles.fieldDiv}>
            <label htmlFor="destinatarios2">Destinatario 2</label>
            <input id="destinatarios2" {...destinatarios2}/>
        </div>
        <div className={styles.fieldDiv}>
            <label htmlFor="destinatarios3">Destinatario 3</label>
            <input id="destinatarios3" {...destinatarios3}/>
        </div>
        <div className={styles.fieldDiv}>
            <label htmlFor="asunto">Asunto</label>
            <input id="asunto" {...asunto}/>                
        </div>
        <div className={styles.textareaDiv}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" {...mensaje}/>                
        </div>

        {feedMessage && (
            <p className={styles.feedMessage}>
                {feedMessage}
            </p>
        )}

        {error && (
            <p className={styles.errorMessage}>
                {error}
            </p>
        )}

        {success && (
            <div className={styles.successMessage}>
                <span>
                    ✅ Correo enviado correctamente
                    {previewUrl && (
                        <a href={previewUrl} target="_blank" style={{ padding: '0px 4px'}}>
                            Ver PDF
                        </a>
                    )}                    
                </span>
            </div>
        )}

        <div className={styles.buttonDiv}>
            <button className={`button-primary ${styles.sendButton}`} type="submit" disabled={loading}>
                {loading ? 'Procesando...' : 'Enviar'}
            </button>

            <button className={`button-secondary ${styles.cancelButton}`} onClick={ modalSwitchOff }>
                Cancelar
            </button>            
        </div>

    </form>
  )
}