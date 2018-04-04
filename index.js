
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const pools = require('lib/pools');
const poolsDev = require('lib/poolsDev');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/pools', (req, res, next) => res.send(pools))
  .get('/pools-dev', (req, res, next) => res.send(poolsDev))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
