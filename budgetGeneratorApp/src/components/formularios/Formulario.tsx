
import useInput from '../../hooks/useInput';
import styles from '../../styles/formulario.module.css'


interface FormularioProps {
    nombreDeMarca: ReturnType<typeof useInput>;
    profesion: ReturnType<typeof useInput>;
    telefono: ReturnType<typeof useInput>;
    email: ReturnType<typeof useInput>;
    presupuesto: ReturnType<typeof useInput>;
    obra: ReturnType<typeof useInput>;
    arquitect: ReturnType<typeof useInput>;
    fecha: ReturnType<typeof useInput>;
    guardarEnStorage: () => void   
}

export const Formulario: React.FC<FormularioProps> = ( { 
    nombreDeMarca, 
    profesion, 
    telefono, 
    email,
    presupuesto,
    obra,
    arquitect,
    fecha,
    guardarEnStorage
} ) => {
    
    return (
        <form className={styles.formContainer}>

            <div className={styles.dataEncabezado}>
                <legend><strong>Datos Personales</strong></legend>

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
                <legend><strong>Datos Del Cliente</strong></legend>

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
                    <label htmlFor="presupuesto">Tipo Presupuesto</label>
                    <textarea id="presupuesto" {...presupuesto}/>                
                </div>
            </div>

        </form>
    )
}
