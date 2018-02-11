import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';
import {login} from "../actions/secure";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";
import {composeValidators, emailField, isRussianDomain, passwordField, requiredField} from "../utils/fields_validation";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit =  values => {
    console.log('values', values)
};

const Login = () => (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email" validate={composeValidators(requiredField, emailField, isRussianDomain)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Email</label>
                                <input {...input} type="text" placeholder="First Name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="password" validate={composeValidators(requiredField, passwordField)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Last Name</label>
                                <input {...input} type="text" placeholder="Last Name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            )}
        />
);

export default Login;