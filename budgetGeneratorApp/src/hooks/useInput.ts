import { useState } from "react"

const useInput = (type: string, initialValue: string = '') => {

    const [value, setValue] = useState(initialValue)

    const onChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }
    
    const reset = () => {
        setValue('');
      };
    
      return { value, onChange, reset, type };
}

export default useInput