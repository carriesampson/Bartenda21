//DEPENDENCIES
const express         = require('express');
const mongoose        = require('mongoose')
const methodOverride  = require('method-override');
const session         = require('express-session');
require('dotenv').config()
require('pretty-error').start();
const bcrypt          = require('bcrypt');
const morgan          = require('morgan');
const app             = express();

//CONFIG
const PORT            = process.env.PORT || 3000;

//MONGO DB CONNECTION
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bartenda';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

//DB CONNECTION TESTING
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

//CONTROLLERS---------------------
const postController    = require('./controllers/posts.js');
const commController    = require('./controllers/comments.js');
const loginController   = require('./controllers/login.js');
const regController     = require('./controllers/reg.js');

//ROOT DIRECTORY
app.get('/', (req, res) => res.redirect('/bartenda'));

//MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(session({
  secret: "SHAsshh",
  resave: false,
  saveUnitialized: false
}));
app.use('/bartenda', postController);
app.use('/comments', commController);
app.use('/login', loginController);
app.use('/register', regController);

//PASSWORD ENCRYPTION------------------
const hashedStringP = bcrypt.hashSync('<%= password %>', bcrypt.genSaltSync(10));
console.log(hashedStringP);

//EMAIL ADDRESS ENCRYPTION------------------
const hashedStringE = bcrypt.hashSync('<%= emailAddress %>', bcrypt.genSaltSync(10));
console.log(hashedStringE);

//LISTENER
app.listen(PORT, () =>console.log('Running on port: ', PORT));
