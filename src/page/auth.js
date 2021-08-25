import React from 'react';
import {useForm} from '../customHook/useForm';

function Form() {
    const {values, handleInputChange, handleSubmit } = useForm(
        {
            account: "",
            password: "",
            rememberMe: false
        },
        (values) => {
            const errors = {}
            if (!values.account) {
            errors.account = '請輸入帳號'
            } else if (!values.password) {
            errors.password = '請輸入密碼'
            }
            return errors
        },
        (formData) => console.dir(formData)
    );

    const { account, password } = values;


    return (
        <form onSubmit={handleSubmit}>
     
            <input
                type="text"
                name="account"
                value={account}
                onChange={handleInputChange}
            />
           
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />
           
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;