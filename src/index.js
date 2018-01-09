import { h, render } from 'preact'
import App from './App'

import getFacts from './facts'

const facts = (window.facts) ? window.facts : {}
render(<App facts={facts} />, document.getElementById('root'))
