/****************************************
* 添加 Vue filter
****************************************/
import Vue from 'vue'
/*
 *     name: timefilter
 * descript: 时间格式化
 *   author: stanley
 */
Date.prototype.Format = function (fmt) {
  let o = {
    "M+": this.getMonth() + 1,  // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  }

  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1)
        ? (o[k])
        : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return fmt
}

Vue.filter('timefilter', function (value,par="-") {
  return new Date(value).Format("yyyy"+par+"MM"+par+"dd")
})
/*
 *     name: trim
 * descript: 去空格
 *   author: stanley
 */
Vue.filter('trim', function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
})

/*
 *     name:toDecimal2
 * descript:货币补2位小数
 *   author:stanley
 */
String.prototype.checkMoney = function () {
  let n = this.toString()
  let newstr = n ? n.replace(/(^\s*)|(\s*$)/g, "") : ''
  let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
  return reg.test(newstr)
}
Vue.filter('toDecimal2', function (x) {
  let i;
  if(x==null){
    i=0
  }else{
    i=x
  }
  let f = parseFloat(i)
  if (isNaN(f)) return false
  let f1 = Math.round(f * 100) / 100
  let s = f1.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s
})
/*
 *     name:miliFormat
 * descript:货币千位分隔及补2位小数
 */
Vue.filter('miliFormat', function (x) {
  let i;
  if(x==null){
    i=0
  }else{
    i=x
  }
  let f = parseFloat(i)
  if (isNaN(f)) return false
  let f1 = Math.round(f * 100) / 100
  let s = f1.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s&&s.toString().replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
})
/*
 *       name: astro
 *   descript: 获取星座
 *     author: xx
 *      value: 1990-12-10
 */
Vue.filter('astro', function (value) {
  function getAstro (m, d) {
    return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2)
  }
  return getAstro(value.split('-')[1], value.split('-')[2]) + '座'
})

/* name:hide
 * descript:身份证/银行卡号码星号隐藏
 *   author:liuliqi
 * begin:开始的下标
 * end:结束下标
 */
Vue.filter('hide', function (value,begin,end) {
  var value = String(value);
  var x = end - begin;
  //var x2 = value.length-end;
  var str = ""
  for (var i = 0; i < x;i++){
    str+= "*"
  }
  return value.substring(0,begin)+str+value.substring(end,value.length)
  // var pattern = new RegExp("^.{"+begin+'}*{'+x+'}.+','g');
  // return value.replace(pattern);
})

//unicode编码显示
Vue.filter('unicode', function (value) {
   //return unescape(value.replace(/＼u/g, "%u"))
  return JSON.parse('"'+value+'"')
})

/*
 *     name: moneyformat
 * descript:保障金额格式化
 */
Vue.filter('moneyformat', function (money) {
    if(money < 10000){
      return money+'元';
    }
    else if(money >= 10000 && money%10000 == 0){
      return money/10000 + '万';
    }
    else if(money >= 10000 && money%10000 != 0){
      return parseFloat(money/10000 + '.' + money%10000) + '万';
    }
})

