export type PersonalDataType = {
    nombreDeMarca: string
    profesion: string
    telefono: string
    email: string
}

export type ClientDataType = {
    presupuesto: string
    obra: string
    arquitect: string
    fecha: string    
}

export type CondicionesType = {
    condiciones1: string
    condiciones2: string
    condiciones3: string
    condiciones4: string
}

export type FormDataType = {
    personalData: PersonalDataType
    clientData: ClientDataType
    totalAmount: string
    condiciones: CondicionesType
}

export type ItemType = {
    textContent: string
    price: string
}