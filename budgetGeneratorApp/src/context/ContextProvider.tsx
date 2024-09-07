import React, { ReactNode, useState } from 'react'
import { Context } from './Context';

interface ContextProviderProps{
    children: ReactNode
}

const ContextProvider: React.FC<ContextProviderProps> = ({children}) => {

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
    <Context.Provider 
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
    </Context.Provider>
  )
}

export default ContextProvider