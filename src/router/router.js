
import EasyLive from '../views/easyLive/EasyLive'
import NewHome from '../views/newHome/NewHome'

const RouterConfig = [
    { path: '/EasyLive', exact: false, component: EasyLive, name: '轻活'},
    { path: '/NewHome', exact: false, component: NewHome, name: '新房'},
]
export default RouterConfig
