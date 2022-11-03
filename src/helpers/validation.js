import { MAIL_FORMAT } from '../config';

export const validateMemberForm = (values) => {
    const errors = {};

    if (!values.memberName) {
        errors.memberName = 'Name is required';
    }

    return errors;
};

export const validateTaskForm = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Title is required';
    }

    return errors;
};

export const validateLoginForm = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!values.email.match(MAIL_FORMAT)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }

    return errors;
};

export const validateRegistrationForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (values.name.length > 10) {
        errors.name = 'Username can not be more than 10 letters';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!values.email.match(MAIL_FORMAT)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }

    if (values.password !== values.password2) {
        errors.password2 = 'Password must match';
    }

    return errors;
};
