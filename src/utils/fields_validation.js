const requiredField = value => (value ? undefined : "Required");

const firstNameField = value => ((!(/^[A-Я{1}][a-я]+$/).test(value)) ? "Невірне або неправильне ім'я" : undefined);

const lastNameField = value => ((!(/^[A-Я{1}][a-я]+$/).test(value)) ? "Невірне або неправильне прізвище" : undefined);

const emailField = value => ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? "Неправильна поштова скринька" : undefined);

const isRussianDomain = value => ((/\.ru|\.su|yandex/i.test(value)) ? "Поштова скринька з забороненим доменним ім'ям" : undefined);

const passwordField = value => (value.length < 6) ? 'Пароль має містити принаймні 6 символів' : undefined;

const validateRegisterFormFields = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Обов'язкове поле"
    } else {
        if (!(/^[A-Я{1}][a-я]+$/).test(values.firstName)) {
            errors.firstName = "Невірне або неправильне ім'я"
        }
    }

    if (!values.lastName) {
        errors.lastName = "Обов'язкове поле"
    } else {
        if ((!(/^[A-Я{1}][a-я]+$/).test(values.lastName))) {
            errors.lastName = "Невірне або неправильне прізвище"
        }
    }

    if (!values.email) {
        errors.email = "Обов'язкове поле"
    } else {
        if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
            errors.email = "Неправильна поштова скринька"
        }
        if (/\.ru|\.su|yandex/i.test(values.email)) {
            errors.email = "Поштова скринька з забороненим доменним ім'ям"
        }
    }

    if (!values.password) {
        errors.password = "Обов'язкове поле"
    } else {
        if (values.password.length < 6) {
            errors.password = 'Пароль має містити принаймні 6 символів'
        }
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = "Обов'язкове поле"
    } else {
        if (values.passwordConfirm.length < 6) {
            errors.passwordConfirm = 'Пароль має містити принаймні 6 символів'
        }
    }

    if (values.password && values.passwordConfirm && (values.password.length >= 6) && (values.passwordConfirm.length >= 6) && values.password !== values.passwordConfirm) {
        errors.password = 'Паролі не співпадають'
        errors.passwordConfirm = 'Паролі не співпадають'
    }
    return errors
}

const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

export {
    requiredField,
    firstNameField,
    lastNameField,
    emailField,
    isRussianDomain,
    passwordField,
    validateRegisterFormFields,
    composeValidators
}
