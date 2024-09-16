import React, { ReactNode, useState } from 'react'
import { ModalContext } from './ModalContext';

interface ContextProviderProps{
    children: ReactNode
}

const ModalProvider: React.FC<ContextProviderProps> = ({children}) => {

    const [modalSwitch, setModalSwitch] = useState<boolean>(false);
    const [passwordMatch, setPasswordMatch] = useState<boolean>(false);

    const modalSwitchOn = () => {
        setModalSwitch(true)
    }

    const modalSwitchOff = () => {
        setModalSwitch(false)
    }

    const passwordMatchOn = () => {
        setPasswordMatch(true)
    }

    const passwordMatchOff = () => {
        setPasswordMatch(false)
    }

    
  return (
    <ModalContext.Provider 
        value={{
            modalSwitch, 
            passwordMatch, 
            modalSwitchOn, 
            modalSwitchOff,
            passwordMatchOn,
            passwordMatchOff
        }}
    >
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider