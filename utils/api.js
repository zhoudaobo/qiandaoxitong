// 在这里面定义所有接口，一个文件管理所有接口，易于维护
import { http } from './http'; // 引入刚刚封装好的http模块，import属于ES6的语法，微信开发者工具必须打开ES6转ES5选项

function getInfo(params) { // 请求用户信息
  http('/stuMage', 'get', params)  // 接口请求的路由地址以及请求方法在此处传递
}
// 每一个接口定义一个函数，然后暴露出去，供逻辑代码调用
function getnotice(params) { // 获取通知
  http('/massage', 'get', params)
}
function studentgettime(params){//获取课表信息
  http('/stuSub', 'get', params)

}
function getsign(params){//签到
  http('/faceSignIn', 'get', params)
}
function login(params){
  http('/login', 'get', params)
}
function getteacherinfo(params){//获取教师信息
  http('/teachMage', 'get', params)
}
function gettime(params){//获取课表
  http('/ArrSub', 'get', params)
}
// function getsignnum(params){//获取学生的签到次数
//   http('/ArrSub', 'get', params)
// }
function pareMage(params) {//获取学生的签到次数
  http('/pareMage', 'get', params)
}
function getpare(params) {//获取学生的签到次数
  http('/parStu', 'get', params)
}
function gettsign(params) {//获取学生签到后的情况（siginlist页面）
  http('/stuReg', 'get', params)
}
function datasee(params) {//数据可视化
  http('/stuArr', 'post', params)
}
function classArr(params) {//教师获取每个学生总的签到次数
  http('/classArr', 'post', params)
}
export default { // 暴露接口
  getInfo,
  getnotice,
  studentgettime,
  getsign,
  login,
  getteacherinfo,
  gettime,
  pareMage,
  getpare,
  gettsign,
  datasee,
  classArr
  // getsign,
}