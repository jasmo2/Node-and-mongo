const express = require('express')
const axios = require('axios')
const app = express()
const { Movies } = require('./db')

app.get('/', (req, res) => {
  res.send('<h1>Hola desde Express</h1>')
})

// Esto es una ruta donde se actualizará usuarios posteriormente
app.post('/guarda-todas-las-peliculas', async (req, res) => {
  try {
    const moviesResponse = await axios.get(
      'https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json'
    )
    console.log(`got the data ${JSON.stringify(moviesResponse.data[0])}`)
    await Movies.insertMany(moviesResponse.data)
    res.send(`las peliculas fueron guardadas`)
  } catch (error) {
    res.status(500)
  }
})

app.listen(9000, () => console.log('Listening on port 9000!'))
