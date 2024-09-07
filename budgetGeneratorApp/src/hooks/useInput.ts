import { useState } from "react"

const useInput = (type: string, initialValue: string = '') => {

    const [value, setValue] = useState(initialValue)

    const onChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    return { value, onChange, type}
}

export default useInput