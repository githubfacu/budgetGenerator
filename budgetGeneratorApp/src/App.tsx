import { useContext } from 'react';
import { ModalContext } from './context/ModalContext';
import { DataContext } from './context/data/DataContext';
import { Documento } from './components/documento/Documento';
import html2pdf from 'html2pdf.js';
import { Modal } from './components/Modal';
import { FormContainer } from './components/estructura/FormContainer';

function App() {

  const { modalSwitch, modalSwitchOn } = useContext(ModalContext)
  const { formData } = useContext(DataContext)

  const generarPDF = () => {
    const element = document.getElementById('documentPDF');
    const fileName = `presupuesto-${formData.clientData.obra.split(' ').join('-')}.pdf`

    if (formData.firmaTitular.trim() === '') {
      if (!confirm('El documento tiene el campo firma vacío, quiere continuar de todos modos?')) {
        return false  
      }      
    }
    
    if (element) {
      const prevScale = element.style.transform
      element.style.transform='scale(1)'

      html2pdf()
      .from(element)
      .set({
        margin: 0,
        filename: fileName
      })
      .save()
      .then(() => {
        return element.style.transform=prevScale
      })
    }
  }

  const handleModalSendEmail = () => {
    if (formData.firmaTitular.trim() === '') {
      if (!confirm('El documento tiene el campo firma vacío, quiere continuar de todos modos?')) {
        return false  
      }
    }
    modalSwitchOn()
  }

  return (
    <>
      <main>
        <section className='seccionFormularios'>
          <div className='header' role='banner'>
            <div className='brand'>
              <picture>
                <img src="/globe-icon-isolated.jpg" alt="Ícono de globo terráqueo" width={60} height={60}/>
              </picture>
              <h2>Budget Generator</h2>              
            </div>
            <p>Genera un Presupuesto de página simple y descarga el archivo en formato pdf</p>
          </div>
          
          <div className='actionButtonsDiv'>
            <button 
              className='actionButton'
              onClick={ handleModalSendEmail }
            >
              Enviar por correo
            </button>
            <button 
              className='actionButton'
              onClick={ generarPDF }
            >
              Descargar pdf
            </button>            
          </div>

          <FormContainer />

          <div className='actionButtonsDiv'
            style={{ marginBottom: '1rem', justifyContent: 'flex-end' }}>
            <button 
              className='actionButton'
              onClick={ () => alert(
                '¡Gracias por tu interés en donar! 🙌\n\n' +
                'Usá los siguientes datos en tu app de banco o Mercado Pago para realizar la transferencia:\n\n' +
                '🔹 Nombre: Facundo Elorz\n' +
                '🔹 CVU: 0000003100013822867777\n' +
                '🔹 Alias: banco.plus.alzar.mp\n' +
                '🔹 Plataforma: Mercado Pago\n\n' +
                'Una vez realizada la donación, ¡agradecemos mucho tu apoyo! ❤️'
              )}
            >
              Donar
            </button>
            <button 
              className='actionButton'
              onClick={ generarPDF }
            >
              Descargar pdf
            </button>            
          </div>

        </section>

        <section className='seccionDocumento'>
          <Documento />          
        </section>
      </main>

      {
        modalSwitch && 
        <Modal />
      }
    </>
  )
}

export default App