const express = require('express')
const axios = require('axios')
const newsr = express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/', async (req, res) => {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey=2c6bfa81c2e8403da6eff5d85b8d1432';

        const news_get = await axios.get(url)
        // console.log(news_get.data);
        res.render('news', { articles: news_get.data.articles })




    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

newsr.get('/home', async (req, res) => {
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey=2c6bfa81c2e8403da6eff5d85b8d1432';

        const news_get = await axios.get(url);
        // console.log(news_get.data.author);

        var all = [];
        for (i = 0; i < 4; i++) {
        all[i] = news_get.data.author ;
        }
        for (i = 0; i < 4; i++) {
            console.log(all[i]) ;
            }
        // console.log(news_get.data.author);

        res.render('home', { articles: news_get.data.articles })




    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

newsr.post('/search', async (req, res) => {
    const search = req.body.search

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=2c6bfa81c2e8403da6eff5d85b8d1432`

        const news_get = await axios.get(url)
        res.render('news', { articles: news_get.data.articles })





    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})


module.exports = newsr