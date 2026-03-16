import { ReactElement } from 'react';
import styles from '../../styles/formulario.module.css';
import { ClientDataForm } from './ClientDataForm';
import { PersonalDataForm } from './PersonalDataForm';

interface BasicDataFormProps {
    children: ReactElement | ReactElement[]
}

export const BasicDataForm = ( { children } : BasicDataFormProps ) => {

    return (
        <div className={styles.formContainer}>
            {children}
        </div>
    )
}

BasicDataForm.PersonalDataForm = PersonalDataForm
BasicDataForm.ClientDataForm = ClientDataForm