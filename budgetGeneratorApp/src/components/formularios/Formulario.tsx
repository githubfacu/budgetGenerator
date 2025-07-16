import { useContext } from 'react';
import styles from '../../styles/formulario.module.css';
import { DataContext } from '../../context/data/DataContext';

export const Formulario = () => {

    const { inputs, guardarEnStorage } = useContext(DataContext)
    const { 
        nombreDeMarca, 
        profesion, 
        telefono, 
        email,
        presupuesto,
        obra,
        arquitect,
        fecha
    } = inputs
    
    return (
        <form className={styles.formContainer}>

            <div className={styles.dataEncabezado}>
                <legend>Datos personales</legend>

                <div className={styles.fieldDiv}>
                    <label htmlFor="nombreDeMarca">Titular</label>
                    <input id="nombreDeMarca" {...nombreDeMarca}/>                
                </div>

                <div className={styles.fieldDiv}>
                    <label htmlFor="profesion">Profesión</label>
                    <input id='profesion' {...profesion} />
                </div>

                <div className={styles.fieldDiv}>
                    <label htmlFor="telefono">Teléfono</label>
                    <input id='telefono' {...telefono} />
                </div>

                <div className={styles.fieldDiv}>
                    <label htmlFor="email">Email</label>
                    <input id='email' {...email} />
                </div>
            </div>

            <span 
                className={styles.autoguardar}
                onClick={ guardarEnStorage }
            >
                Guardar
            </span>

            <hr />

            <div className={styles.budgetClientData}>
                <legend>Datos del cliente</legend>

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
            </div>

        </form>
    )
}
