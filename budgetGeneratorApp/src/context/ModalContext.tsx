import { createContext } from "react";

const defaultContext = {
    modalSwitch: false,
    passwordMatch: false,
    modalSwitchOn: function (): void {
        throw new Error("Function not implemented.")
    },
    modalSwitchOff: function (): void {
        throw new Error("Function not implemented.")
    },
    passwordMatchOn: function (): void {
        throw new Error("Function not implemented.")
    },
    passwordMatchOff: function (): void {
        throw new Error("Function not implemented.")
    },
}

export const ModalContext = createContext(defaultContext)