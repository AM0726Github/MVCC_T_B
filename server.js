const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 443;
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Sekret',
  cookie: { maxAge: 86400 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App Now listening at http://localhost:${PORT}/...`));
});