const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'deeba';

module.exports = (app) => {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(cookieParser(secret));
};