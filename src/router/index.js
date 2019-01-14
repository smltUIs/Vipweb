import Vue from 'vue'
import Router from 'vue-router'
import VipClassify from '../pages/VipClassify'
import VipBrand from "../pages/VipBrand"
import VipSearch from "../pages/VipSearch"
import VipRegister from "../pages/VipRegister"
import VipLogin from "../pages/VipLogin"
import VipRush from "../pages/VipRush"
import VipShopList from "../pages/shoplist"
import VipShopDetail from "../pages/shopdetail"
import VipIndex from "../pages/VipIndex"
import VipMom from "../pages/VipMom"
import VipBeauty from "../pages/VipBeauty"
import dress from "../pages/dress"
import VipShopCart from "../pages/VipShopCart"
import VipShopCartEmpty from "../pages/VipShopCartEmpty"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classify',
      name: 'classify',
      component: VipClassify
    },
    {
      path: '/brand',
      name: 'brand',
      component: VipBrand
    },
    {
      path: '/search',
      name: 'search',
      component: VipSearch
    },
    {
      path: '/VipRegister',
      name: 'VipRegister',
      component: VipRegister
    },
    {
      path: '/VipLogin',
      name: 'VipLogin',
      component: VipLogin
    },
    {
      path: '/VipRush',
      name: 'VipRush',
      component: VipRush
    },
    {
      path: '/shoplist',
      name: 'shoplist',
      component: VipShopList
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: VipShopDetail
    },
    {
      path: '/',
      name: 'VipIndex',
      component: VipIndex
    },
    {
      path: '/VipMom',
      name: 'VipMom',
      component: VipMom
    },
    {
      path: '/VipBeauty',
      name: 'VipBeauty',
      component: VipBeauty
    },
    {
      path: '/dress/:id',
      name: 'dress',
      component: dress
    },
    {
      path: '/VipShopCart',
      name: 'VipShopCart',
      component: VipShopCart
    },
    {
      path: '/VipShopCartEmpty',
      name: 'VipShopCartEmpty',
      component: VipShopCartEmpty
    }
  ]
})
