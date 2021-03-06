let reg = {};

// 匹配邮箱
reg.regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

// 匹配手机号（严格）
reg.regPhone = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

// 匹配手机号（宽松）
reg.regPhoneEasy = /^(?:(?:\+|00)86)?1\d{10}$/;

// 匹配8-16位数字和字母密码的正则表达式
reg.regPsw1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

// 密码强度 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
reg.regPsw2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/

// 匹配国内电话号码 0510-4305211
reg.regCall = /\d{3}-\d{8}|\d{4}-\d{7}/;

// 匹配身份证号码
reg.regId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

// 匹配腾讯QQ号
reg.regQQ = /[1-9][0-9]{4,}/;

// 匹配ip地址
reg.regIp = /\d+\.\d+\.\d+\.\d+/;

// 匹配中文
reg.regCn = /^[\u4e00-\u9fa5]*$/;

// 首字母必须为字母
reg.regFirstLetter = /^[a-zA-Z]/;

// 匹配中文名
reg.regChineseName = /^(?:[\u4e00-\u9fa5·]{2,16})$/;

// 匹配英文名
reg.regEnglishName = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

// 匹配数字
reg.regNum = /^\d{1,}$/

// 匹配字母加数字
reg.regLetterAndNumber = /^[A-Za-z0-9]+$/

reg.regMoney = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/

export default reg;
