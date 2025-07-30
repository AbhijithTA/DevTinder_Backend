const jwt = require('jsonwebtoken');

const token = jwt.sign({id:user._id}, 'secret',{expiresIn: '1h'});

//decoding token

const decoded = jwt.verify(token, 'secret');

