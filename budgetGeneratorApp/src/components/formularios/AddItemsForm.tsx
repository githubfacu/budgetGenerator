import { Trash2 } from 'lucide-react';
import styles from '../../styles/itemsForm.module.css'
import { useContext } from 'react';
import { DataContext } from '../../context/data/DataContext';

export const AddItemsForm = () => {

    const { itemList, inputs, addItem, removeItem, itemTextContentUpdate, itemPriceUpdate } = useContext(DataContext)
    const { itemField , itemPrice } = inputs

    const handleAddItem = () => {
        addItem({textContent: itemField.value, price: itemPrice.value})
    }

  return (
    <section 
        aria-labelledby='services-list'
        className={styles.itemsFormContainer}
    >
        <div className={styles.itemsSubmitForm}>
            <h2 id='services-list'>Lista de servicios</h2>

            <label htmlFor="itemField">Nombre</label>
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
                className={`button-secondary ${styles.itemsFormSubmitButton}`}
                onClick={ handleAddItem }
            >
                Agregar Item
            </button>
        </div>

        <div 
            aria-live='polite'
            aria-relevant='additions removals'
        >
            {
                itemList.length > 0 &&
                <ul 
                    aria-labelledby='services-list'
                    className={styles.listaDeElementos}
                >
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
                                    aria-label={`Nombre item ${index +1}`}
                                />
                                <input 
                                    type="text" 
                                    value={item.price} 
                                    className={styles.priceInput}
                                    onChange={ (e) => itemPriceUpdate(e, item) }
                                    aria-label="precio"
                                />
                                <button 
                                    className={styles.trashIcon}
                                    aria-label={`Eliminar ${item.textContent}`}
                                    onClick={ () => removeItem (item) }
                                >
                                    <Trash2  
                                        strokeWidth={1.75}
                                        aria-hidden='true'
                                        size={21}
                                    />
                                </button>
                            </li>
                        ))
                    }
                </ul>            
            }            
        </div>

    </section>
  )
}