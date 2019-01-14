import {shopcartURL} from '../commons/shopcart';

export default {
  // 获取shopcarts信息，cb返回的数据
  getshopcartData (cb) {
    fetch(shopcartURL).then(res => {
      res.json().then(data => {
        cb(data)
      })
    })
  }
}
