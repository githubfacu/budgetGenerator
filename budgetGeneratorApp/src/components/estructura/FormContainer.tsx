import { AddItemsForm } from "../formularios/AddItemsForm"
import Condiciones from "../formularios/Condiciones"
import { FirmaTitular } from "../formularios/FirmaTitular"
import { Formulario } from "../formularios/Formulario"
import { TotalAmount } from "../formularios/TotalAmount"

export const FormContainer = () => {

  return (
    <>
        <Formulario />
        <AddItemsForm />
        <TotalAmount />
        <Condiciones />
        <FirmaTitular />
    </>
  )
}