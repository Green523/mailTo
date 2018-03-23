'use strict';

const nodeMailer = require('nodemailer');

var transporter = nodeMailer.createTransport({
             	  service: 'QQ',
		  secure: true, // 使用 SSL
		  secureConnection: true, // 使用 SSL
		  port: 25, // SMTP 端口
		  auth: {
	          user: '',//这是你的账号
	          pass: ''//这是邮箱开启stmp服务的授权号
    		  }

	     }),


    mailOptions = {
			  from: "2228680344<2228680344@qq.com>", // 发件地址
			  to: "", // 收件列表
			  subject: "Hello world", // 标题
			
			  html: "<b>thanks a for visiting!</b> 世界，你好！" // html 内容
			};

		
		transporter.sendMail(mailOptions, (error, info) => {
		  if (error) {
		    return console.error(error);
		  } 

		    console.log('Message sent: %s', info.messageId);
		  })
		 
