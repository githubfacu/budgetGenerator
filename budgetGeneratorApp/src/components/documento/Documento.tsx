import { Mail, Minus, Phone } from 'lucide-react';
import styles from '../../styles/documento.module.css'
import { FormDataType, ItemType } from '../../types/form-types';

interface DocumentoProps {
    formData: FormDataType
    itemList: ItemType[]
    firmaTitular: string
}

export const Documento = ( { formData, itemList, firmaTitular } : DocumentoProps) => {

    const date = new Date(`${formData.clientData.fecha}T00:00:00`)

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    
    const formatDate = date.toLocaleDateString('es-ES', options);

    // const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    // const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // const diaSemana = diasSemana[date.getDay()]
    // const dia = date.getDate()
    // const mes = meses[date.getMonth()]
    // const año = date.getFullYear()

    // const formattedDate = formData.clientData.fecha ? `${diaSemana}, ${dia} de ${mes} de ${año}` : 'fecha'
    

  return (
    <div className={styles.documentContainer} id='documentPDF'>
        <div className={styles.encabezado}>
            <h1 className={styles.encabezadoNivel1}>
                {formData.personalData.nombreDeMarca}
            </h1>
            <h2 className={styles.encabezadoNivel2}>
                {formData.personalData.profesion}
            </h2>
            <div className={styles.contacto}>
                <span className={styles.lucideIcon}>
                    <Phone strokeWidth={1.75} size={20}/>
                </span>
                <span>
                    {formData.personalData.telefono}
                </span>
                <span className={styles.minusIcon}>
                    <Minus strokeWidth={1.5} size={20}/>
                </span>
                <span className={styles.lucideIcon}>
                    <Mail strokeWidth={1.75} size={20}/>                    
                </span>
                <span>
                    {formData.personalData.email}
                </span>
            </div>
        </div>

        <hr />

        <div className={styles.datosDelCliente}>
            <span className={styles.fecha}>
                {formatDate}
            </span>
            <span>
                {formData.clientData.obra}
            </span>
            <span>
                {formData.clientData.arquitect}
            </span>
            <span>
                {formData.clientData.presupuesto}
            </span>
        </div>

        <div className={styles.listaDeServicios}>
            <ul className={styles.listaDeServiciosUl}>
                {
                    itemList.map((item, index) => (
                        <li key={index}>
                            <span>{item.textContent}</span>
                            <div className={item.price ? styles.dottedLine : styles.dottedLineHidden}></div>
                            <span>{item.price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>

        <hr className={styles.topAuto}/>

        <div className={styles.total}>
            <span>TOTAL</span>
            <span>{formData.totalAmount}</span>
        </div>

        <hr className={styles.hrlast}/>

        <div className={styles.condiciones}>
            <p>{formData.condiciones.condiciones1}</p>
            <p>{formData.condiciones.condiciones2}</p>
            <p>{formData.condiciones.condiciones3}</p>
            <p>{formData.condiciones.condiciones4}</p>
        </div>

        <div className={styles.firmaTitular}>
            <span>{firmaTitular}</span>            
        </div>
    </div>
  )
}
