import { FormEvent, ReactNode, useState } from "react"
import { DataContext } from "./DataContext"
import useInput from "../../hooks/useInput";
import { FormDataType, ItemType, PersonalDataType } from "../../types/form-types";

const personalDataStorage = localStorage.getItem('personalData')
const initialValueData: PersonalDataType = personalDataStorage ? JSON.parse(personalDataStorage) : {};

interface ContextProviderProps{
    children: ReactNode
}

const DataProvider : React.FC<ContextProviderProps> = ({children}) => {

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

    const formData : FormDataType = {
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
      },
      firmaTitular: firmaTitular.value
    }

    const itemValues : ItemType = {
        textContent: itemField.value,
        price: itemPrice.value
    }


    const addItem = (item: ItemType) => {
        setItemList([...itemList, item])
        itemPrice.onChange({ target: { value: '', name: '', type: 'text' } } as React.ChangeEvent<HTMLInputElement>)
        itemField.onChange({ target: { value: '', name: '', type: 'text' } } as React.ChangeEvent<HTMLInputElement>)
      }
    
      const removeItem = (item: ItemType) => {
        const updatedList = itemList.filter((currentItem) => currentItem !== item )
        setItemList(updatedList)
      }
    
      const itemTextContentUpdate = (e: FormEvent<HTMLInputElement>, item: ItemType) => {
    
        const newValue = (e.target as HTMLInputElement).value
    
        const updatedList = itemList.map((currentItem) => {
          if (currentItem === item) {
            return { ...currentItem, textContent: newValue }
          }
          return currentItem
        })
    
        setItemList(updatedList)
      }
    
      const itemPriceUpdate = (e: FormEvent<HTMLInputElement>, item: ItemType) => {
    
        const newValue = (e.target as HTMLInputElement).value
    
        const updatedList = itemList.map((currentItem) => {
          if (currentItem === item) {
            return { ...currentItem, price: newValue }
          }
          return currentItem
        })
    
        setItemList(updatedList)
      }
    
      const guardarEnStorage = () => {
        localStorage.setItem('personalData', JSON.stringify(formData.personalData))
        return alert('Datos guardados')
      }


  return (
    <DataContext.Provider 
        value={{
            formData,
            itemValues,
            itemList,
            inputs: {
                nombreDeMarca,
                profesion,
                telefono,
                email,
                presupuesto,
                obra,
                arquitect,
                fecha,
                itemField,
                itemPrice,
                totalAmount,
                condiciones1,
                condiciones2,
                condiciones3,
                condiciones4,
                firmaTitular,
            },
            addItem,
            removeItem,
            itemTextContentUpdate,
            itemPriceUpdate,
            guardarEnStorage,
        }}
    >
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider