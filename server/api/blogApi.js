const modles = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const sqlL = require('../sqlMap')

let pool = mysql.createPool(modles.mysql)

const jsonWrite = (res,ret) => {
	if(typeof ret == 'undefined') {
		res.json({
			code:0,
			msg:'操作失败'
		})
	} else {
		res.json({code:1,msg:ret})
	}
}

router.use('/writebloge',(req,res) => {
	let sql = sqlL.blog.add
	let params = req.body.params
	console.log(params)
	pool.query(sql,[params.title,params.content,params.time,params.user],(err,require) => {
		if(err) {
			res.send({code:0,msg:err.message})
			return
		}
		jsonWrite(res,require)
	})
})

router.use('/getblogs',(req,res) => {
	let sql = sqlL.blog.search
	let params = req.body.params
	pool.query(sql,params.user,(err,result) => {
		if(err) {
			res.send({code:0,msg:err.message})
			return 
		}
		jsonWrite(res,result)
	})
})

module.exports = router