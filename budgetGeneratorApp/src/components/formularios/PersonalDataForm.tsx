import { useContext } from 'react'
import { DataContext } from '../../context/data/DataContext'
import styles from '../../styles/formulario.module.css';

export const PersonalDataForm = () => {

    const { inputs, guardarEnStorage } = useContext(DataContext)
    const { 
        nombreDeMarca, 
        profesion, 
        telefono, 
        email,
    } = inputs

  return (
    <>
        <section 
            className={styles.dataEncabezado}
            aria-labelledby='titular-data'
        >
            <h2 id='titular-data'>Datos personales</h2>

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
            <button 
                className={`button-secondary ${styles.autoguardar}`}
                onClick={ guardarEnStorage }
                aria-haspopup='dialog'
                aria-describedby='auto-save-info'
            >
                Guardar
            </button>
            <small id='auto-save-info' className={styles.helpDescription}>
                Al guardar los datos personales se almacenarán localmente en su navegador.
            </small>
        </section>
    </>
  )
}
