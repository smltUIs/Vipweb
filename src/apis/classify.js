import {classifyURL} from "../commons/ajaxURL";

export default {
  getClassifyData(cb){
    fetch(classifyURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
