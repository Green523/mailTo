'use strict';

const nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
              service: 'QQ',
	          //host: "smtp.qq.com", // 主机
			  secure: true, // 使用 SSL
			  secureConnection: true, // 使用 SSL
			  port: 25, // SMTP 端口
			  auth: {
	          user: '2228680344@qq.com',
	          pass: 'zcsevprxpuaxdhig'
    		  }

	     }),


    mailOptions = {
			  from: "2228680344<2228680344@qq.com>", // 发件地址
			  to: "1878693031@qq.com", // 收件列表
			  subject: "Hello world", // 标题
			
			  html: "<b>thanks a for visiting!</b> 世界，你好！" // html 内容
			};

		
		transporter.sendMail(mailOptions, (error, info) => {
		  if (error) {
		    return console.error(error);
		  } 

		    console.log('Message sent: %s', info.messageId);
		  })
		 