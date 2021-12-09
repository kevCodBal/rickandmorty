import React, { useState } from 'react'

export const useFormulario = (initilState ={}) => {

    const [inputs, setInputs] = useState(initilState)


    const handleChange= (e) => {
        const {name, value, checked, type}= e.target;

        setInputs((old) =>({
            ...old,
            [name]: type==="checkbox" ? checked:value
        }))
    }

    const reset = () =>{
        setInputs(initilState)
    }

    return [inputs, handleChange, reset]
}
