const sql = {
	user:{
		add:'insert db_user(user,password) value (?,?)',
		search:'select user,password from db_user where user = ?'
	},
	msg:{
		search:'select name,skill,email,personalized_signature from db_user where user = ?',
		update:'update db_user set name = ?, skill = ?, email = ?, personalized_signature = ? where user = ?'
	},
	blog:{
		add:'insert db_information(title,content,timer,publishing_user) value (?,?,?,?)',
		search:'select title,content,timer,publishing_user from db_information',
		myblog_secrch:'select title,content,timer from db_information as fm where fm.publishing_user = ?'

	}
}
module.exports = sql