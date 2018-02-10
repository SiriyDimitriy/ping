import React from 'react';
import connect from 'react-redux/es/connect/connect';
import withRouter from 'react-router-dom/es/withRouter';
import {login} from "../actions/secure";
import { render } from "react-dom";
import { Form, Field } from "react-final-form";

const ErrorPage = () => (
    <div>
        ERROR PAGE
    </div>
);

export default ErrorPage;