const commentModel = require('../models/Comment');
const createError = require('../utils/error-message');

// controller function
const allComments = async (req, res) => {
    res.render('admin/comments', {role: req.role});
 }

module.exports = {
    allComments
}