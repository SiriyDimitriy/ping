const requiredField = value => (value ? undefined : "Required");

const emailField = value => ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? "Invalid email" : undefined);

const isRussianDomain = value => ((/\.ru|\.su|yandex/.test(value)) ? "Deprecated domain" : undefined);

const passwordField = value => value.length < 6 ? 'Should be greater than 6 symbols' : undefined;

const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

export {
    requiredField,
    emailField,
    isRussianDomain,
    passwordField,
    composeValidators
}
