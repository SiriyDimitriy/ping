const requiredField = value => (value ? undefined : "Required");

const firstNameField = value => ((!(/^[A-Я{1}][a-я]+$/).test(value)) ? "Невірне або неправильне ім'я" : undefined);

const lastNameField = value => ((!(/^[A-Я{1}][a-я]+$/).test(value)) ? "Невірне або неправильне прізвище" : undefined);

const emailField = value => ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? "Неправильна поштова скринька" : undefined);

const isRussianDomain = value => ((/\.ru|\.su|yandex/i.test(value)) ? "Поштова скринька з забороненим доменним ім'ям" : undefined);

const passwordField = value => value.length < 6 ? 'Пароль має містити принаймні 6 символів' : undefined;

const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

export {
    requiredField,
    firstNameField,
    lastNameField,
    emailField,
    isRussianDomain,
    passwordField,
    composeValidators
}
