import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';
import {login} from "../actions/secure";
import {render} from "react-dom";
import {Form, Field} from "react-final-form";
import {composeValidators, emailField, isRussianDomain, passwordField, requiredField} from "../utils/fields_validation";

import '../../styles/login_page.less'
import Logo from '../../src/assets/svg/large_logo_icon.svg'

const onSubmit = values => {
    console.log('values', values)
};

const Login = () => (
    <div className='login_page flex-col'>
        <Logo className='login_page_logo'/>
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email" validate={composeValidators(requiredField, emailField, isRussianDomain)}>
                        {({input, meta}) => (
                            <div>
                                <input {...input} type="text" placeholder="Ваш Email"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="password" validate={composeValidators(requiredField, passwordField)}>
                        {({input, meta}) => (
                            <div>
                                <input {...input} type="text" placeholder="Ваш пароль"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Авторизуватися
                        </button>
                        <span>АБО</span>
                        <button
                            type="button"
                        >
                            FACEBOOK
                        </button>
                    </div>
                </form>
            )}
        />
    </div>

);

export default Login;