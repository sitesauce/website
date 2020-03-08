import { render as timeago } from 'timeago.js'

Array.from(document.querySelectorAll('time')).forEach(el => timeago(el))
