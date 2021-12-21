const express = require('express');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'hzinzuvadia',
    password : '',
    database : 'lend-table'
  }
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
  res.send('The application is running');
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  db.select('*').from('user_info').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch(err => {
      res.status(400).json('error getting user')});
})

app.post('/signin', (req, res) => {
  db.select('email')
    .from('login')
    .where({ email: req.body.email, password: req.body.password })
    .then(data => {
      const isValid = data[0].email.length;
      if (isValid) {
        return db.select('*').from('user_info')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0]);
          })
          .catch(err => res.status(400).json('unable to get user'));
      } else {
        res.status(400).json('wrong credentials');
      }
    })
    .catch(err => res.status(400).json('wrong credentials'));
})

app.post('/register', (req, res) => {
  const { email, name, password, age, contribution, match } = req.body;
  db.transaction(trx => {
    trx.insert({ email, password})
    .into('login')
    .returning('email')
    .then(loginEmail => {
      return trx.insert({name, age, email: loginEmail[0], contribution, match}).into('user_info').returning('*').then(user => {
        res.json(user[0]);
      })
    })
    .then(trx.commit)
    .catch(trx.rollback);
  })
  .catch(err => console.log('err', err));
})

app.listen(3000, ()=> {
  console.log('App is running on port 3000');
})
