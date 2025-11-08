import { AddItemsForm } from "../formularios/AddItemsForm"
import Condiciones from "../formularios/Condiciones"
import { FirmaTitular } from "../formularios/FirmaTitular"
import { BasicDataForm } from "../formularios/BasicDataForm"
import { TotalAmount } from "../formularios/TotalAmount"

export const FormContainer = () => {

  return (
    <>
        <BasicDataForm />
        <AddItemsForm />
        <TotalAmount />
        <Condiciones />
        <FirmaTitular />
    </>
  )
}