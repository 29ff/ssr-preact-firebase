import * as functions from 'firebase-functions'
import { h } from 'preact'
import { render } from 'preact-render-to-string'
import express from 'express'
import fs from 'fs'

import App from './src/App'
import getFacts from './src/facts'

const app = express()

app.get('**', (req, res)  => {
  getFacts().then(facts => {
    const index = fs.readFileSync(`${__dirname}/index.html`, 'utf8')
    const reactHtml = renderToString(<App facts={facts} />)
    let html = index.replace('<!-- ::APP:: -->', reactHtml)
    html = html.replace('/* ::facts:: */', `window.facts = ${JSON.stringify(facts)}`)
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
    res.send(html)
  })
})

export let ssrpreact = functions.https.onRequest(app);
