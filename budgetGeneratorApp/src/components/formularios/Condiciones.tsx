import { useContext, useState } from 'react';
import styles from '../../styles/condiciones.module.css'
import { ChevronDown, ChevronRight } from 'lucide-react';
import { DataContext } from '../../context/data/DataContext';

const Condiciones = () => {

    const [showMore, setShowMore] = useState(false)
    const { inputs } = useContext(DataContext)
    const { condiciones1, condiciones2, condiciones3, condiciones4 } = inputs

  return (
    <section 
        className={styles.condicionesContainer}
        aria-labelledby='conditions'    
    >
        <h2 id='conditions'>Condiciones de contrato</h2>

        <div className={styles.textareaDiv}>
            <label htmlFor="condiciones1">Descripción</label>
            <textarea id="condiciones1" {...condiciones1} placeholder='descripción opcional...'/>                
        </div>

        <button 
            className={styles.desplegarSeccion}
            onClick={ () => setShowMore(!showMore) }
            aria-expanded={showMore}
            aria-controls="condiciones-extra"
            type='button'
        >
            <strong>
                { showMore ? 'Contraer sección' : 'Desplegar sección' }
            </strong>
            
            {
                showMore ? <ChevronDown aria-hidden='true' /> : 
                <ChevronRight  aria-hidden='true' />
            }
        </button>

        {
            showMore &&
            <div id='condiciones-extra' className={styles.extraConditions}>
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
            </div>
        }
    </section>
  )
}

export default Condiciones