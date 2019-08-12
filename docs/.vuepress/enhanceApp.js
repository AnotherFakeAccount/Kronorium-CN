import Buefy from "buefy"
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
})=>{
    Vue.use(Buefy,{
        defaultIconPack: 'fas',
    })
}