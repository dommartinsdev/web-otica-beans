const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	let title = 'Ótica Beans - Início'
	res.render('home/home', {title})
})
router.get('/service', (req, res) => {
	let title = 'Ótica Beans - Serviços'
	let cards = [
		{
			title:'Exames oftalmológicos',
			description:'Clique aqui e comece a digitar. Porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.'
		},
		{
			title:'Armações',
			description:'Clique aqui e comece a digitar. Porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.'
		},
		{
			title:'Ajustes de óculos',
			description:'Clique aqui e comece a digitar. Porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.'
		},
		{
			title:'Lentes & Aplicação',
			description:'Clique aqui e comece a digitar. Porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora.'
		},
	]
	res.render('services/service', {title, cards})
})
router.get('/about', (req, res) => {
	let title = 'Ótica Beans - Sobre nós'
	res.render('about/about', {title})
})
module.exports = router