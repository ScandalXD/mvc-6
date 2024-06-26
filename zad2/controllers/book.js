const Book = require('../models/Book');

const getBooksList = (req, res) => {
    const userId = req.session.userId; // Dostęp do userId z sesji
    const books = Book.getAll();
    res.render('books', { title: 'Books', userId, books });
};

module.exports = {
    getBooksList
};