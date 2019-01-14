import {procart} from "../commons/ajaxURL";

export default {
  getprocartData(cb){
    fetch(procart).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
