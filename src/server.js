const express = require('express');
const path = require('path');
const app = express();
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function(req, res) {
    return res.send('pong');
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


body('name', 'empty name').isLength({ min: 4 });
body('email', "short email").isLength({ min: 6 });
body("password", "short password").isLength({ min: 3 });

(req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
        // Error messages can be returned in an array using `errors.array()`.
        errors.array() = ['Name is short', 'email is short', 'password is short'];
    } else {
        // Data from form is valid.
        console.log("valid");
    }
}



app.listen(process.env.PORT || 8080);