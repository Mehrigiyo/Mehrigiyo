import { useState } from "react"

const useForm = (initial) => {
    const [value, setValue] = useState(initial)
    
    return [value, {
        onChange: (e) => setValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value

        })),
        // onBlur
    }]
}

export default useForm