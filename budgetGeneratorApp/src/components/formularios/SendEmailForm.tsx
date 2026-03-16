
import emailjs from '@emailjs/browser'
import html2pdf from 'html2pdf.js';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import useInput from '../../hooks/useInput';
import styles from '../../styles/sendEmailForm.module.css'

interface EmailFormProps {
    email: string
    obra: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const SendEmailForm = ( { email, obra } : EmailFormProps ) => {

    const { modalSwitchOff } = useContext(ModalContext)

    const remitente = useInput('text', email);
    const destinatarios1 = useInput('text', email);
    const destinatarios2 = useInput('text');
    const destinatarios3 = useInput('text');
    const asunto = useInput('text', 'presupuesto');
    const mensaje = useInput('text');

    const [pdfBase64, setPdfBase64] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false)


    const generarPDF = async (): Promise<string | null> => {
        const element = document.getElementById('documentPDF');

        if (element) {
            const prevScale = element.style.transform;
            element.style.transform = 'scale(1)';

            const pdfBase64 = await html2pdf()
                .from(element)
                .output('datauristring');

            element.style.transform = prevScale;

            return pdfBase64.split(',')[1];
        }
        return null;
    };

    useEffect(() => {
        generarPDF().then((pdf) => {
            setPdfBase64(pdf)
        })
        setFileName(`presupuesto-${obra.split(' ').join('-')}.pdf`)
    }, [obra])

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        modalSwitchOff()
        return alert('Función de envío de correo aún no implementada.');


        setIsSending(true)

        const destinatarios = [destinatarios1.value, destinatarios2.value, destinatarios3.value]
        .filter(Boolean)
        .join(',');

        if (!destinatarios) {
            alert('Debe ingresar al menos un destinatario.');
            setIsSending(false);
            return;
        }

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_email: remitente.value,
                    to_email: destinatarios,
                    subject: asunto.value,
                    message: mensaje.value,
                    attachment: pdfBase64,
                    filename: fileName
                },
                PUBLIC_KEY
            )

            alert('Correo enviado exitosamente.')
            modalSwitchOff()

        } catch (error) {
            console.error(error)
            alert('Error al enviar el correo.')
        } finally {
            setIsSending(false)
        }
    }


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

        {pdfBase64 && <p>Archivo adjunto: {fileName}</p>}

        <div className={styles.buttonDiv}>
            <button className={`button-primary ${styles.sendButton}`} type="submit" disabled={isSending}>
                {isSending ? 'Enviando...' : 'Enviar'}
            </button>

            <button className={`button-secondary ${styles.cancelButton}`} onClick={ modalSwitchOff }>
                Cancelar
            </button>            
        </div>

    </form>
  )
}