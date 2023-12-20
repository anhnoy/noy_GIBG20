import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/login2',
    name: 'Login2',
    component: () => import('../components/Login3m.vue')
  },
  {
    path: '/change_pw',
    name: 'change_pw',
    component: () => import('../components/Change_PW.vue')
  },
  {
    path: '/test2',
    name: 'Test',
    component: () => import('../components/test2.vue')
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('../components/test3.vue')
  },
  {
    path: '/Navbar',
    name: 'Navbar',
    component: () => import('../components/Navbar.vue')
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('../components/Partner/Partner.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../components/Member/Member.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('../components/Reservation/Reservation.vue')
  },
  {
    path: '/administrator',
    name: 'Administrator',
    component: () => import('../components/Member/Administrator.vue')
  },
  {
    path: '/category_Service',
    name: 'Category_Service',
    component: () => import('../components/Service_Management/Category_Service.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../components/Contents/Board/Notice/Notice.vue')
  },
  {
    path: '/modify(Inquiry)/:id',
    name: 'Modify(Inquiry)',
    component: () => import('../components/Contents/Board/Helpdesk/Detail(modify)/Inquiry_detail.vue')
  },
  {
    path: '/inquiry',
    name: 'Inquiry',
    component: () => import('../components/Contents/Board/Helpdesk/Inquiry.vue')
  },
  {
    path: '/insert_notice',
    name: 'insert_Notice',
    component: () => import('../components/Contents/Board/Notice/insert/insert_notice.vue')
  },
    {
    path: '/product_list',
    name: 'Product_list',
    component: () => import('../components/Service_Management/Product_list.vue')
  },
  {
    path: '/tire_information',
    name: 'Tire_information',
    component: () => import('../components/Service_Management/Tire_information.vue')
  },
  {
    path: '/insert',
    name: 'Insert',
    component: () => import('../components/Partner/insert/insert.vue')
  },
  {
    path: '/insert1',
    name: 'Insert1',
    component: () => import('../components/Contents/Board/FAQ/insert1')
  },
 
  {
    path: '/modify(partner)/:id',
    name: 'Modify(partner)',
    component: () => import('../components/Partner/Detail(Modify)/modify.vue')
  },
  {
    path: '/modify(Reservation)/:id',
    name: 'Modify(Reservation )',
    component: () => import('../components/Reservation/Detail(Modify)/Reservation_detail.vue')
  },
  {
    path: '/modify(member)/:id',
    name: 'Modify(member)',
    component: () => import('../components/Member/Member_list/Detail(modify)/modify.vue')
  },
  {
    path: '/modify(admin)/:id',
    name: 'Modify(admin)',
    component: () => import('../components/Member/Administrator_list/Detail(modify)/Detail_administrator.vue')
  },
  {
    path: '/insert_Admin',
    name: 'Insert_Admin',
    component: () => import('../components/Member/Administrator_list/insert/insert_administrator.vue')
  },
  
  {
    path: '/insert_product',
    name: 'Insert_product',
    component: () => import('../components/Service_Management/Product_list/insert/insert_product.vue')
  },
//////////////noy

{
  path: '/information_MP',
  name: 'Information_MP',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Information_MP.vue')
},
{
  path: '/faq',
  name: 'Faq',
  component: () => import('../components/Contents/Board/FAQ/FAQ.vue')
},
{
  path: '/faq_data2',
name: 'Faq_data2',
component: () => import('../components/Contents/Board/FAQ/FAQ_data2.vue')
},
{
path: '/bill',
name: 'Bill',
component: () => import('../components/Contents/Evants/Bill.vue')
},
{
  path: '/detaill',
  name: 'Detaill',
  component: () => import('../components/Contents/Evants/Bill/Detaill/Detaill.vue')
},
{
  path: '/test',
  name: 'Test',
  component: () => import('../components/test.vue')
},
{
  path: '/detail(modify)_PM',
  name: 'Detail(modify)_PM',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Detail(modify)_PM.vue')
},
{
  path: '/proposal_closed',
  name: 'Proposal_closed',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_closed.vue')
},
{
  path: '/proposal_location',
  name: 'Proposal_location',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_location.vue')
},
{
  path: '/proposal_pricing',
  name: 'Proposal_pricing',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_pricing.vue')
},
{
  path: '/proposal_Opening',
  name: 'Proposal_Opening',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_Opening.vue')
},
{
  path: '/proposal_Contact',
  name: 'Proposal_Contact',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_Contact.vue')
},
{
  path: '/proposal_Facility',
  name: 'Proposal_Facility',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_Facility.vue')
},
{
  path: '/proposal_payment',
  name: 'Proposal_payment',
  component: () => import('../components/Contents/Evants/Information_modification_proposal/Modify/Proposal_data/Proposal_payment.vue')
},
{
  path:'/Edit_BI_Approved',
  name: 'Edit_BI_Approved',
  component: () => import ('../components/Contents/Evants/Information_modification_proposal/Modify/Edit_BI_/Edit_BI_Approved.vue')
},
{
  path:'/edit_BI_Open',
  name: 'edit_BI_Open',
  component: () => import ('../components/Contents/Evants/Information_modification_proposal/Modify/Edit_BI_/Edit_BI_Open.vue')
},
{
  path:'/Edit_IB_Approval_denied',
  name: 'Edit_IB_Approval_denied',
  component: () => import ('../components/Contents/Evants/Information_modification_proposal/Modify/Edit_BI_/Edit_IB_Approval_denied.vue')
},



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
