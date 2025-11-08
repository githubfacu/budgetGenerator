import { useContext } from 'react'
import { DataContext } from '../../context/data/DataContext'
import styles from '../../styles/formulario.module.css';

export const ClientDataForm = () => {

    const { inputs } = useContext(DataContext)
    const { 
            presupuesto,
            obra,
            arquitect,
            fecha
        } = inputs

  return (
    <>
        <section 
            className={styles.budgetClientData}
            aria-labelledby='client-data'
        >
            <h2 id='client-data'>Datos del cliente</h2>

            <div className={styles.fieldDiv}>
                <label htmlFor="fecha">Fecha</label>
                <input id="fecha" {...fecha}/>                
            </div>

            <div className={styles.fieldDiv}>
                <label htmlFor="obra">Obra/Cliente</label>
                <input id="obra" {...obra}/>                
            </div>

            <div className={styles.fieldDiv}>
                <label htmlFor="arquitect">Arquitecto/a</label>
                <input id="arquitect" {...arquitect}/>                
            </div>
            
            <div className={styles.textareaDiv}>
                <label htmlFor="presupuesto">Tipo de presupuesto</label>
                <textarea id="presupuesto" value={presupuesto.value} onChange={presupuesto.onChange}/>
            </div>
        </section>
    </>
  )
}
