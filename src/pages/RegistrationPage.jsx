import React from 'react';
import {Form, Field} from "react-final-form";
import {validateRegisterFormFields} from "../utils/fields_validation";

import Logo from '../../src/assets/svg/large_logo_icon.svg'
import ActionButton from "../components/simple/ActionButton";

const onSubmit = values => {
    console.log('values', values)
};

const RegistrationPage = () => (
    <div className='auth_page flex-col'>
        <Logo className='auth_page_logo'/>
        <Form
            validate={validateRegisterFormFields}
            onSubmit={onSubmit}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit} className='auth_page_form'>
                    <Field name="firstName">
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="text"
                                       placeholder="Ваше ім'я"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched &&
                                <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="lastName">
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="text"
                                       placeholder="Ваше прізвище"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched &&
                                <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="email">
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="text"
                                       placeholder="Ваш Email"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched &&
                                <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="password"
                                       placeholder="Ваш пароль"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched &&
                                <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="passwordConfirm">
                        {({input, meta}) => (
                            <div className='auth_page_form_field flex-col'>
                                <input {...input}
                                       type="password"
                                       placeholder="Повторити пароль"
                                       className={'auth_page_form_field_input ' + ((meta.error && meta.touched) ? 'auth_page_form_field_input_error' : '')}
                                />
                                {meta.error && meta.touched &&
                                <span className='auth_page_form_field_error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="auth_page_form_controls flex-col">
                        <ActionButton text='ЗАРЕЄСТРУВАТИСЯ' type="primary" actionType="submit" disabled={submitting}/>
                        <span className="auth_page_form_controls_or_block">АБО</span>
                        <ActionButton text='FACEBOOK' type="secondary"/>
                    </div>
                </form>
            )}
        />
    </div>
);

export default RegistrationPage;