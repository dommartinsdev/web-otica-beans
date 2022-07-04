const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	let title = 'Ótica Beans - Home'
	res.render('home/home', {title})
})

module.exports = router