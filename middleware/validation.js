const { body } = require('express-validator');

// Login form validation
const loginValidation = [
    body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .matches(/^\S+$/)
    .withMessage('Username must not contain spaces')
    .isLength({ min:5, max:12})
    .withMessage('Username must be atleast 5 to 10 characters long'),

    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min:5, max:12})
    .withMessage('Password must be 5 to 12 characters long')
]

// USER VALIDATION
const UserValidation = [
    body('fullname')
        .trim()
        .notEmpty()
        .withMessage('Fullname is required')
        .isLength({ min:5, max:25})
        .withMessage('Fullname must be 5 to 25 characters long'),

    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required')
        .matches(/^\S+$/)
        .withMessage('Username must not contain spaces')
        .isLength({ min:5, max:12})
        .withMessage('Username must be atleast 5 to 10 characters long'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min:5, max:12})
        .withMessage('Password must be 5 to 12 characters long'),

    body('role')
        .trim()
        .notEmpty()
        .withMessage('Role is required')
        .isIn(['author','admin'])
        .withMessage('Role must be author or admin')
]

// USER UPDATE VALIDATION
const UserUpdateValidation = [
    body('fullname')
        .trim()
        .notEmpty()
        .withMessage('Fullname is required')
        .isLength({ min:5, max:25})
        .withMessage('Fullname must be 5 to 25 characters long'),


    body('password')
        .optional({ checkFalsy: true}) // optional field
        .isLength({ min:5, max:12})
        .withMessage('Password must be 5 to 12 characters long'),

    body('role')
        .trim()
        .notEmpty()
        .withMessage('Role is required')
        .isIn(['author','admin'])
        .withMessage('Role must be author or admin')

]

// CATEGORY VALIDATION
const categoryValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Category name is required')
        .isLength({ min:3, max:12})
        .withMessage('Category name must be 5 to 25 characters long'),

    body('description')
        .isLength({ min:3, max:12})
        .withMessage('Description must be atleast 100 characters long'),
]

// ARTICLE VALIDATION
const articleValidation = [

]

module.exports = {
    loginValidation,
    UserValidation,
    UserUpdateValidation,
    categoryValidation,
    articleValidation
};