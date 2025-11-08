import styles from '../../styles/formulario.module.css';
import { ClientDataForm } from './ClientDataForm';
import { PersonalDataForm } from './PersonalDataForm';

export const BasicDataForm = () => {

    return (
        <div className={styles.formContainer}>
            <PersonalDataForm />
            <hr />
            <ClientDataForm />
        </div>
    )
}
