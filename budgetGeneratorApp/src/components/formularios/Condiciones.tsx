
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import styles from '../../styles/condiciones.module.css'
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CondicionesProps {
    condiciones1: ReturnType<typeof useInput>;
    condiciones2: ReturnType<typeof useInput>;
    condiciones3: ReturnType<typeof useInput>;
    condiciones4: ReturnType<typeof useInput>;
}

const Condiciones = ( { condiciones1, condiciones2, condiciones3, condiciones4 } : CondicionesProps ) => {

    const [showMore, setShowMore] = useState(false)


  return (
    <div className={styles.condicionesContainer}>
        <legend><strong>Condiciones de contrato</strong></legend>

        <div className={styles.textareaDiv}>
            <label htmlFor="condiciones1">Descripción 1</label>
            <textarea id="condiciones1" {...condiciones1} placeholder='descripción opcional...'/>                
        </div>

        {
            showMore &&
            <>
                <div className={styles.textareaDiv}>
                    <label htmlFor="condiciones2">Descripción 2</label>
                    <textarea id='condiciones2' {...condiciones2} placeholder='descripción opcional...'/>
                </div>

                <div className={styles.textareaDiv}>
                    <label htmlFor="condiciones3">Descripción 3</label>
                    <textarea id='condiciones3' {...condiciones3} placeholder='descripción opcional...'/>
                </div>

                <div className={styles.textareaDiv}>
                    <label htmlFor="condiciones4">Descripción 4</label>
                    <textarea id='condiciones4' {...condiciones4} placeholder='descripción opcional...'/>
                </div> 
            </>
        }

        <span 
            className={styles.desplegarSeccion}
            onClick={ () => setShowMore(!showMore) }
        >
            <small>
                <strong>
                    { showMore ? 'Contraer sección' : 'Desplegar sección' }
                </strong>
            </small>
            
            {
                showMore ? <ChevronUp /> : <ChevronDown />
            }
        </span>

    </div>
  )
}

export default Condiciones