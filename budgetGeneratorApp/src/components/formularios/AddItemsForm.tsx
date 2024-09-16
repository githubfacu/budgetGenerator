import { Trash2 } from 'lucide-react';
import styles from '../../styles/itemsForm.module.css'
import { useContext } from 'react';
import { DataContext } from '../../context/data/DataContext';

export const AddItemsForm = () => {

    const { itemList, inputs, addItem, removeItem, itemTextContentUpdate, itemPriceUpdate } = useContext(DataContext)
    const { itemField , itemPrice } = inputs

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

        {
            itemList.length > 0 &&
            <ul className={styles.listaDeElementos}>
                {
                    itemList.map((item, index) => (
                        <li
                            key={index}
                        >
                            <input 
                                type="text" 
                                value={item.textContent} 
                                className={styles.textContentInput}
                                onChange={ (e) => itemTextContentUpdate(e, item) }
                            />
                            <input 
                                type="text" 
                                value={item.price} 
                                className={styles.priceInput}
                                onChange={ (e) => itemPriceUpdate(e, item) }
                            />
                            <span className={styles.trashIcon}>
                                <Trash2  
                                    onClick={ () => removeItem (item) }
                                    strokeWidth={1.75}
                                />                            
                            </span>
                        </li>
                    ))
                }
            </ul>            
        }
    </div>
  )
}