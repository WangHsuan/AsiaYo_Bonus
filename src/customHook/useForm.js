import React,{useState} from 'react';

export const useForm = (initialState = {}, validation, onSubmit) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //驗證是否error
        let errors = validation(values)
        if(Object.keys(errors).length!==0){
            console.log(errors)
        }else{
            onSubmit(values)
        }
        
    }

    return { values, handleInputChange,handleSubmit };
}
