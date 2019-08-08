let formation_data = (data) => {   // 重写日期函数格式化日期
   		return `${data.getFullYear()}-${data.getMonth() + 1 >= 10 ? (data.getMonth() + 1) : '0' + (data.getMonth() + 1)}-${data.getDate() >= 10 ? data.getDate() : '0' + data.getDate()}
             ${data.getHours() >= 10 ? data.getHours() : '0' + data.getHours()} : ${data.getMinutes()>=10?data.getMinutes():'0'+data.getMinutes()} : ${data.getSeconds() >= 10 ? data.getSeconds() : '0' + data.getSeconds()}`;
    };

export {
	formation_data,
}