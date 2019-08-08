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

router.use('/login',(req,res) => {		//登陆
	let sql = sqlL.user.search
	let user = req.body.params.name
	pool.query(sql,user,function (err, result) {
	    if(err){
	    	res.send({code:0,msg:err.message})
	      	return
	    }
	    jsonWrite(res,result)
	})
})
router.use('/adduser',(req,res) => { 	//注册
	let sql = sqlL.user.add
	let params = req.body.params
	pool.query(sql,[params.name,params.pass],(err,result) => {
		if(err) {
			res.send({code:0,msg:err.message})
			return
		}
		jsonWrite(res,result)
	})
})

router.use('/msgadd',(req,res) => {		//信息填写
	let sql = sqlL.msg.update
	let params = req.body.params
	pool.query(sql,[params.name,params.skill,params.email,params.personalized_signature,params.user],(err,result) => {
		if(err) {
			res.send({code:0,msg:err.message})
			return
		}
		jsonWrite(res,result)
	})
})	

router.use('/searchmsg',(req,res) => {	//信息查找
	let sql = sqlL.msg.search
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