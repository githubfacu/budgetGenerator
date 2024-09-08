import { useContext, useState } from 'react';
import { Documento } from './components/documento/Documento'
import { AddItemsForm } from './components/formularios/AddItemsForm';
import { Formulario } from './components/formularios/Formulario'
import useInput from './hooks/useInput'
import { ItemType, PersonalDataType } from './types/form-types';
import { TotalAmount } from './components/formularios/TotalAmount';
import Condiciones from './components/formularios/Condiciones';
import html2pdf from 'html2pdf.js';
import { FirmaTitular } from './components/formularios/FirmaTitular';
import { Context } from './context/Context';
import { Modal } from './components/Modal';

const personalDataStorage = localStorage.getItem('personalData')
const initialValueData: PersonalDataType = personalDataStorage ? JSON.parse(personalDataStorage) : {};

function App() {

  const { modalSwitch, modalSwitchOn } = useContext(Context)

  const nombreDeMarca = useInput('text', initialValueData.nombreDeMarca);
  const profesion = useInput('text', initialValueData.profesion);
  const telefono = useInput('text', initialValueData.telefono);
  const email = useInput('text', initialValueData.email);
  const presupuesto = useInput('text');
  const obra = useInput('text');
  const arquitect = useInput('text');
  const fecha = useInput('date');
  const itemField = useInput('text');
  const itemPrice = useInput('text');
  const totalAmount = useInput('text');
  const condiciones1 = useInput('text');
  const condiciones2 = useInput('text');
  const condiciones3 = useInput('text');
  const condiciones4 = useInput('text');
  const firmaTitular = useInput('text');


  const [itemList, setItemList] = useState<ItemType[]>([])

  const formData = {
    personalData: {
      nombreDeMarca: nombreDeMarca.value,
      profesion: profesion.value,
      telefono: telefono.value,
      email: email.value,      
    },
    clientData: {
      presupuesto: presupuesto.value,
      obra: obra.value,
      arquitect: arquitect.value,
      fecha: fecha.value,      
    },
    totalAmount: totalAmount.value,
    condiciones: {
      condiciones1: condiciones1.value,
      condiciones2: condiciones2.value,
      condiciones3: condiciones3.value,
      condiciones4: condiciones4.value,
    }
  }

  const addItem = (item: ItemType) => {
    setItemList([...itemList, item])
  }

  const removeItem = (item: ItemType) => {
    const updatedList = itemList.filter((currentItem) => currentItem !== item )
    setItemList(updatedList)
  }

  const guardarEnStorage = () => {
    localStorage.setItem('personalData', JSON.stringify(formData.personalData))
    return alert('Datos guardados')
  }

  const generarPDF = () => {
    const element = document.getElementById('documentPDF');
    const fileName = `presupuesto-${formData.clientData.obra.split(' ').join('-')}.pdf`

    if (firmaTitular.value.trim() === '') {
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
    if (firmaTitular.value.trim() === '') {
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
          <div className='actionButtonsDiv'>
            <span 
              className='actionButton'
              onClick={ handleModalSendEmail }
            >
              Enviar por correo
            </span>
            <span 
              className='actionButton'
              onClick={ generarPDF }
            >
              Descargar pdf
            </span>            
          </div>

          <Formulario 
            nombreDeMarca={nombreDeMarca}
            profesion={profesion}
            telefono={telefono}
            email={email}
            presupuesto={presupuesto}
            obra={obra}
            arquitect={arquitect}
            fecha={fecha}
            guardarEnStorage={guardarEnStorage}
          />
          <AddItemsForm 
            itemField={itemField}
            itemPrice={itemPrice}
            addItem={addItem}
            itemList={itemList}
            removeItem={removeItem}
          />
          <TotalAmount totalAmount={totalAmount}/>
          <Condiciones 
            condiciones1={condiciones1} 
            condiciones2={condiciones2} 
            condiciones3={condiciones3}
            condiciones4={condiciones4}
          />
          <FirmaTitular 
            firmaTitular={firmaTitular}
          />
            <span 
              className='actionButton'
              onClick={ generarPDF }
              style={{ margin: '0 1rem 1rem 0', alignSelf: 'flex-end'}}
            >
              Descargar pdf
            </span>
        </section>

        <section className='seccionDocumento'>
          <Documento 
            formData={formData}
            itemList={itemList}
            firmaTitular={firmaTitular.value}
          />          
        </section>
      </main>

      {
        modalSwitch && 
        <Modal 
          email={email.value}
          obra={obra.value}
        />
      }
    </>
  )
}

export default App