//DEPENDENCIES
const express         = require('express');
const mongoose        = require('mongoose')
const methodOverride  = require('method-override');
const morgan          = require('morgan');
const app             = express();
require('pretty-error').start();

//CONFIG
const PORT      = process.env.PORT || 3000;

//MONGO DB CONNECTION
const mongoURI = 'mongodb://localhost:27017/bartenda';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

//DB CONNECTION TESTING
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

//CONTROLLERS---------------------
// const regController = require ('./controllers/registration.js);
// const loginController = require('./controllers/login.js');
const postController = require('./controllers/posts.js');
const commController = require('./controllers/comments.js');
//OTHER CONTROLLERS?----------------

//MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
// app.use('/bartenda/register', regController);
// app.use('/bartenda/login', loginController);
app.use('/bartenda', postController);
app.use('/comments', commController);

//ROOT DIRECTORY
app.get('/', (req, res) => res.redirect('/bartenda'));

//LISTENER
app.listen(PORT, () =>console.log('Running on port: ', PORT));
