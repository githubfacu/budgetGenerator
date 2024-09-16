import { createContext } from "react";
import { DataContextType } from "../../types/context.types";

const defaultContext: DataContextType = {
    formData: {
        personalData: {
            nombreDeMarca: '',
            profesion: '',
            telefono: '',
            email: '',
        },
        clientData: {
            presupuesto: '',
            obra: '',
            arquitect: '',
            fecha: '',
        },
        totalAmount: '',
        condiciones: {
            condiciones1: '',
            condiciones2: '',
            condiciones3: '',
            condiciones4: '',
        },
        firmaTitular: '',
    },
    itemValues: {
        textContent: '',
        price: ''
    },
    itemList: [],
    inputs: {
        nombreDeMarca: { value: '', onChange: () => {}, type: 'text' },
        profesion: { value: '', onChange: () => {}, type: 'text' },
        telefono: { value: '', onChange: () => {}, type: 'text' },
        email: { value: '', onChange: () => {}, type: 'text' },
        presupuesto: { value: '', onChange: () => {}, type: 'text' },
        obra: { value: '', onChange: () => {}, type: 'text' },
        arquitect: { value: '', onChange: () => {}, type: 'text' },
        fecha: { value: '', onChange: () => {}, type: 'date' },
        itemField: { value: '', onChange: () => {}, type: 'text' },
        itemPrice: { value: '', onChange: () => {}, type: 'text' },
        totalAmount: { value: '', onChange: () => {}, type: 'text' },
        condiciones1: { value: '', onChange: () => {}, type: 'text' },
        condiciones2: { value: '', onChange: () => {}, type: 'text' },
        condiciones3: { value: '', onChange: () => {}, type: 'text' },
        condiciones4: { value: '', onChange: () => {}, type: 'text' },
        firmaTitular: { value: '', onChange: () => {}, type: 'text' },
    },
    addItem: () => {},
    removeItem: () => {},
    itemTextContentUpdate: () => {},
    itemPriceUpdate: () => {},
    guardarEnStorage: () => {}
};

export const DataContext = createContext(defaultContext)