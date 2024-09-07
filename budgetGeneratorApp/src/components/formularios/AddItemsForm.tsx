import { X } from 'lucide-react';
import useInput from '../../hooks/useInput';
import styles from '../../styles/itemsForm.module.css'
import { ItemType } from '../../types/form-types';

interface FormProps {
    itemField: ReturnType<typeof useInput>
    itemPrice: ReturnType<typeof useInput>
    itemList: ItemType[]
    addItem: (item: ItemType) => void    
    removeItem: (item: ItemType) => void   
}

export const AddItemsForm = ( { itemField, itemPrice, addItem, itemList, removeItem } : FormProps) => {

    const handleSubmit = () => {
        addItem({textContent: itemField.value, price: itemPrice.value})
    }


  return (
    <div className={styles.itemsFormContainer}>
        <div className={styles.itemsSubmitForm}>
            <h3>Lista de Servicios</h3>

            <label htmlFor="itemField">Item</label>
            <input 
                {...itemField}
                id='itemField' 
            />

            <label htmlFor="itemPrice">Precio</label>
            <input 
                {...itemPrice}
                id='itemPrice' 
            />

            <button
                className={styles.itemsFormSubmitButton}
                onClick={ handleSubmit }
            >
                Agregar Item
            </button>
        </div>

        <ul className={styles.listaDeElementos}>
            {
                itemList.map((item, index) => (
                    <li
                        key={index}
                        onClick={ () => removeItem (item) }
                    >
                        <span>{item.textContent} ({item.price})</span>
                        <X strokeWidth={1.75}/>
                    </li>
                ))
            }
        </ul>
    </div>

  )
}
