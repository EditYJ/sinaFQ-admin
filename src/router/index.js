import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/

export const constantRoutes = [
  //  login
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  //  404
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  //  首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'home1' }
    }]
  },
  //  用户
  {
    path: '/user',
    component: Layout,
    redirct: '/userCenter',
    children: [{
      path: 'userCenter',
      name: 'userCenter',
      component: () => import('@/views/usercenter/index'),
      meta: { title: '用户', icon: 'user' }
    }, {
      path: 'userDetail',
      name: 'userDetail',
      hidden: true,
      component: () => import('@/views/usercenter/userdetail'),
      meta: { title: '用户详情', icon: 'list' }
    }]
  },
  //  商品
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/goodsManage/goodsList',
    name: 'Goods',
    meta: { title: '商品', icon: 'shopmall' },
    children: [
      {
        path: 'goodsManage',
        name: 'goodsManage',
        meta: { title: '商品管理', breadcrumb: false },
        redirect: '/goods/goodsManage/goodsList',
        component: () => import('@/views/goods/goodsManage/index'), // Parent router-view
        children: [
          {
            path: 'goodsList',
            component: () => import('@/views/goods/goodsManage/goodsList'),
            name: 'goodsList',
            meta: { title: '商品列表' }
          },
          {
            path: 'issueGoods',
            component: () => import('@/views/goods/goodsManage/goodsList'),
            name: 'issueGoods',
            meta: { title: '发布商品' }
          },
          {
            path: 'importGoods',
            component: () => import('@/views/goods/goodsManage/importGoods'),
            name: 'importGoods',
            meta: { title: '导入商品' }
          },
          {
            path: 'goodsPoolDetail',
            hidden: true,
            component: () => import('@/views/goods/goodsManage/importGoods/goodsPoolDetail'),
            name: 'goodsPoolDetail',
            meta: { title: '商品池详情' }
          }
        ]
      }, {
        path: 'goodsSetting',
        name: 'goodsSetting',
        meta: { title: '商品配置', breadcrumb: false },
        component: () => import('@/views/goods/goodsSetting/index'), // Parent router-view
        children: [
          {
            path: 'categoryManage',
            component: () => import('@/views/goods/goodsSetting/typeManage'),
            name: 'categoryManage',
            meta: { title: '类目管理' }
          },
          {
            path: 'paramsManage',
            component: () => import('@/views/goods/goodsSetting/attrManage'),
            name: 'paramsManage',
            meta: { title: '属性参数管理' },
            children: [
              {
                path: 'attrManage',
                component: () => import('@/views/goods/goodsSetting/attrManage/components/attrList'),
                name: 'attrManage',
                hidden: true,
                meta: { title: '属性列表' }
              },
              {
                path: 'argsManage',
                component: () => import('@/views/goods/goodsSetting/attrManage/components/paramsList'),
                name: 'argsManage',
                hidden: true,
                meta: { title: '参数列表' }
              }
            ]
          },
          {
            path: 'brandManage',
            name: 'brandManage',
            component: () => import('@/views/goods/goodsSetting/brandManage'),
            meta: { title: '品牌管理' }
          },
          {
            path: 'thirdManage',
            name: 'thirdManage',
            component: () => import('@/views/goods/goodsSetting/thirdManage'),
            meta: { title: '第三方平台管理' }
          }
        ]
      }
    ]
  },

  //  订单
  {
    path: '/order',
    component: Layout,
    redirect: '/order/shoppingOrder/orderList',
    name: 'order',
    meta: { title: '订单', icon: 'shopmall' },
    children: [
      {
        path: 'shoppingOrder',
        component: () => import('@/views/order/shoppingOrder/index'), // Parent router-view
        name: 'shoppingOrder',
        meta: { title: '商品业务', breadcrumb: false },
        children: [
          {
            path: 'orderList',
            component: () => import('@/views/order/shoppingOrder/orderList'),
            name: 'orderList',
            meta: { title: '订单列表' }
          },
          {
            path: 'orderDetail',
            name: 'orderDetail',
            hidden: true,
            component: () => import('@/views/order/shoppingOrder/orderList/orderDetail'),
            meta: { title: '订单详情', icon: 'list' }
          },
          {
            path: 'buyList',
            component: () => import('@/views/order/shoppingOrder/buyList'),
            name: 'buyList',
            meta: { title: '采购列表' }
          },
          {
            path: 'afterBuyList',
            component: () => import('@/views/order/shoppingOrder/afterBuy'),
            name: 'afterBuyList',
            meta: { title: '售后处理' }
          },
          {
            path: 'listDetail',
            name: 'listDetail',
            hidden: true,
            component: () => import('@/views/order/shoppingOrder/afterBuy/orderDetail'),
            meta: { title: '订单详情', icon: 'list' }
          }
        ]
      },
      {
        path: 'cashOrder',
        component: () => import('@/views/order/cashOrder/index'), // Parent router-view
        name: 'cashOrder',
        alwaysShow: true,
        meta: { title: '现金业务', breadcrumb: false },
        children: [
          {
            path: 'cashOrderList',
            component: () => import('@/views/order/cashOrder/orderList'),
            name: 'cashOrderList',
            meta: { title: '订单列表' }
          }, {
            path: 'cashOrderDetail',
            name: 'cashOrderDetail',
            hidden: true,
            component: () => import('@/views/order/cashOrder/orderList/orderDetail'),
            meta: { title: '订单详情', icon: 'list' }
          }
        ]
      },
      {
        path: 'moneyOrder',
        component: () => import('@/views/order/loanOrder/index'), // Parent router-view
        name: 'moneyOrder',
        alwaysShow: true,
        meta: { title: '放款还款', breadcrumb: false },
        children: [
          {
            path: 'cashGroup',
            component: () => import('@/views/order/loanOrder/cashGroup'),
            name: 'cashGroup',
            meta: { title: '资产组包' }
          }
        ]
      }
    ]
  },

  //  信审
  {
    path: '/trial',
    component: Layout,
    redirect: '/trial/trialManage/teamDeploy',
    name: 'trial',
    meta: { title: '信审', icon: 'shopmall' },
    children: [
      {
        path: 'trialManage',
        name: 'trialManage',
        meta: { title: '信审管理', breadcrumb: false },
        redirect: '/trial/trialManage/teamDeploy',
        component: () => import('@/views/trial/trialManage/index'), // Parent router-view
        children: [
          {
            path: 'teamDeploy',
            component: () => import('@/views/trial/trialManage/teamDeploy'),
            name: 'teamDeploy',
            meta: { title: '团队配置' }
          },
          {
            path: 'machineOrder',
            name: 'machineOrder',
            component: () => import('@/views/trial/trialManage/machineOrder'),
            meta: { title: '机审分单' }
          },
          {
            path: 'firstTrial',
            name: 'firstTrial',
            component: () => import('@/views/trial/trialManage/firstTrial'),
            meta: { title: '订单初审' }
          },
          {
            path: 'endTrial',
            name: 'endTrial',
            component: () => import('@/views/trial/trialManage/endTrial'),
            meta: { title: '订单终审' }
          },
          {
            path: 'searchMession',
            name: 'searchMession',
            component: () => import('@/views/trial/trialManage/searchMession'),
            meta: { title: '审核任务查询' }
          },
          {
            path: 'trialCount',
            name: 'trialCount',
            component: () => import('@/views/trial/trialManage/trialCount'),
            meta: { title: '审核统计' }
          }
        ]
      }
    ]
  },
  //  账务系统
  {
    path: '/account',
    component: Layout,
    redirect: '/account/loanRepay/loanManage',
    name: 'account',
    meta: { title: '账务系统', icon: 'shopmall' },
    children: [
      {
        path: 'loanRepay',
        name: 'loanRepay',
        meta: { title: '放款还款', breadcrumb: false },
        redirect: '/account/loanRepay/loanManage',
        component: () => import('@/views/account/loanRepay/index'), // Parent router-view
        children: [
          {
            path: 'loanManage',
            name: 'loanManage',
            component: () => import('@/views/account/loanRepay/loanManage'),
            meta: { title: '放款管理' }
          },
          {
            path: 'repayManage',
            name: 'repayManage',
            component: () => import('@/views/account/loanRepay/repayManage'),
            meta: { title: '还款核销' }
          }
        ]
      }, {
        path: 'refundManage',
        name: 'refundManage',
        meta: { title: '退款管理', breadcrumb: false },
        redirect: '/account/refundManage/refundDeal',
        component: () => import('@/views/account/refundManage/index'), // Parent router-view
        children: [
          {
            path: 'refundDeal',
            name: 'refundDeal',
            component: () => import('@/views/account/refundManage/refundDeal'),
            meta: { title: '退款处理' }
          }, {
            path: 'expDeal',
            name: 'expDeal',
            component: () => import('@/views/account/refundManage/expDeal'),
            meta: { title: '异常处理' }
          }
        ]
      }
    ]
  },
  //  催收
  {
    path: '/collection',
    component: Layout,
    redirect: '/collection/teamDeploy',
    name: 'collection',
    meta: { title: '催收系统 ', icon: 'money' },
    children: [
      {
        path: 'teamDeploy',
        name: 'teamDeploy',
        meta: { title: '团队配置', icon: 'user' },
        component: () => import('@/views/collection/teamDeploy') // Parent router-view
      }, {
        path: 'caseAssign',
        name: 'caseAssign',
        meta: { title: '案件分配', icon: 'user' },
        component: () => import('@/views/collection/caseAssign') // Parent router-view
      }, {
        path: 'caseDeal',
        name: 'caseDeal',
        meta: { title: '案件处理', icon: 'user' },
        component: () => import('@/views/collection/caseDeal') // Parent router-view
      }, {
        path: 'moneyState',
        name: 'moneyState',
        meta: { title: '催收统计', icon: 'user' },
        component: () => import('@/views/collection/moneyState') // Parent router-view
      }
    ]
  },

  //  公共
  {
    path: '/public',
    component: Layout,
    redirect: '/public/repaySetting',
    name: 'public',
    alwaysShow: true,
    meta: { title: '公共', icon: 'money' },
    children: [
      {
        path: 'repaySetting',
        name: 'repaySetting',
        meta: { title: '还款管理', icon: 'user' },
        component: () => import('@/views/public/repaySetting') // Parent router-view
      },
      {
        path: 'repayDetail',
        name: 'repayDetail',
        hidden: true,
        meta: { title: '还款详情', icon: 'user' },
        component: () => import('@/views/public/repayDetail') // Parent router-view
      }
    ]
  },

  //  合同系统
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '合同系统',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '合同系统', icon: 'form' }
      }
    ]
  },
  //  消息模版
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'table',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '消息模版', icon: 'form' }
      }
    ]
  },
  // 费率系统
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'table',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '费率系统', icon: 'form' }
      }
    ]
  },

  //  权限
  {
    path: '/power',
    component: Layout,
    redirect: '/power/powerManage',
    name: 'power',
    meta: { title: ' 权限 ', icon: 'home' },
    children: [
      {
        path: 'powerManage',
        name: 'powerManage',
        meta: { title: '角色管理', icon: 'user' },
        component: () => import('@/views/power/roleManage') // Parent router-view
      }, {
        path: 'staffManage',
        name: 'staffManage',
        meta: { title: '员工管理', icon: 'user' },
        component: () => import('@/views/power/staffManage') // Parent router-view
      }, {
        path: 'dailyManage',
        name: 'dailyManage',
        meta: { title: '操作日志', icon: 'user' },
        component: () => import('@/views/power/dailyManage') // Parent router-view
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
