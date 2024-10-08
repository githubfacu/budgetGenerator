import { useContext, useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import styles from '../../styles/sendEmailForm.module.css'
import html2pdf from 'html2pdf.js';
import { ModalContext } from '../../context/ModalContext';

interface EmailFormProps {
    email: string
    obra: string
}

export const SendEmailForm = ( { email, obra } : EmailFormProps ) => {

    const { modalSwitchOff } = useContext(ModalContext)

    const remitente = useInput('text', email);
    const destinatarios1 = useInput('text');
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
        console.log(remitente.value);
        
        e.preventDefault()
        alert('Esta función está momentáneamente deshabilitada')
        return modalSwitchOff()
        setIsSending(true)

        const destinatarios = [destinatarios1.value, destinatarios2.value, destinatarios3.value]
        .filter(Boolean)
        .join(',');

        if (!destinatarios) {
            alert('Debe ingresar al menos un destinatario.');
            setIsSending(false);
            return;
        }
        

        // const templateParams = {
        //     remitente: remitente.value,
        //     destinatario: destinatarios,
        //     asunto: asunto.value,
        //     mensaje: mensaje.value,
        //     attachment: pdfBase64 ? {
        //         filename: fileName,
        //         content: pdfBase64,
        //         encoding: 'base64'
        //     } : null,
        // };
    }


  return (
    <form onSubmit={ handleSubmitForm } className={styles.sendEmailFormContainer}>
        <div className={styles.fieldDiv}>
            <label htmlFor="remitente">De</label>
            <input disabled={true} id="remitente" {...remitente}/>
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

        <button type="submit" disabled={isSending}>
            {isSending ? 'Enviando...' : 'Enviar Correo'}
        </button>

        <span style={{ color: 'red'}}>El servicio de correo está momentáneamente deshabilitado.</span>

        {pdfBase64 && <p>Archivo adjunto: {fileName}</p>}
    </form>
  )
}