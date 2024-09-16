import { FormEvent } from "react";
import { FormDataType, ItemType } from "./form-types";

export type InputType = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => void
    type: string
}

export type DataContextType = {
    formData: FormDataType
    itemValues: ItemType
    itemList: ItemType[]
    inputs: {
        nombreDeMarca: InputType
        profesion: InputType
        telefono: InputType
        email: InputType
        presupuesto: InputType
        obra: InputType
        arquitect: InputType
        fecha: InputType
        itemField: InputType
        itemPrice: InputType
        totalAmount: InputType
        condiciones1: InputType
        condiciones2: InputType
        condiciones3: InputType
        condiciones4: InputType
        firmaTitular: InputType
    }
    addItem: (item: ItemType) => void;
    removeItem: (item: ItemType) => void;
    itemTextContentUpdate: (e: FormEvent<HTMLInputElement>, item: ItemType) => void;
    itemPriceUpdate: (e: FormEvent<HTMLInputElement>, item: ItemType) => void;
    guardarEnStorage: () => void;
}