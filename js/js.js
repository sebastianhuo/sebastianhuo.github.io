// 获取所有输入字段的值
const inputValues = document.querySelectorAll('[name="username"])[0].value;
const emailValues = document.querySelectorAll('[name="email"]')[0].value;
const messageValues = document.querySelector('[name="message"]')[0].value;

// 将所有输入字段的值存储在一个数组中
const inputArray = [inputValues, emailValues, messageValues];



app.listen(3000);

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chengfenghuo02@gmail.com',
    pass: '231250866hcf'
  }
});

const mailOptions = {
  from: 'your_email',
  to: 'user_email',
  subject: '新反馈',
  text: `用户 ${inputValues[0]} 写了以下反馈：\n\n${inputValues[2]}`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('反馈电子邮件已发送：' + info.messageId);
  }
});