import { useState } from "react"

const useInput = (type: string, initialValue: string = '') => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return { value, onChange, type }
};

export default useInput