import React from 'react';
import {Form, Field} from "react-final-form";
import {composeValidators, emailField, isRussianDomain, passwordField, requiredField} from "../utils/fields_validation";

import Logo from '../../src/assets/svg/large_logo_icon.svg'
import ActionButton from "../components/simple/ActionButton";
import Link from "react-router-dom/es/Link";

const onSubmit = values => {
    console.log('values', values)
};

const Login = () => (
    <div className='auth_page flex-col'>
        <Logo className='auth_page_logo'/>
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className='auth_page_form'>
                    <Field name="email" validate={composeValidators(requiredField, emailField, isRussianDomain)}>
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="text"
                                       placeholder="Ваш Email"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched && <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="password" validate={composeValidators(requiredField, passwordField)}>
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="password"
                                       placeholder="Ваш пароль"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched && <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="auth_page_form_controls flex-col">
                        <ActionButton text='Авторизуватися' type="primary" actionType="submit" disabled={submitting}/>
                        <span className="auth_page_form_controls_or_block">АБО</span>
                        <ActionButton text='FACEBOOK' type="secondary"/>
                    </div>
                </form>
            )}
        />
        <div className='auth_page_to_register'>
            Якщо Ви не маєте облікового запису, необхідно спочатку його <Link to={'/register'} className='auth_page_to_register_link'>Зареєструвати</Link>
        </div>
    </div>
);

export default Login;