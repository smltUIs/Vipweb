import {searchURL} from "../commons/ajaxURL";


/**
 * 通过searchid来获取search的信息
 */
export default {
  getSearchData(cb){
    fetch(searchURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
