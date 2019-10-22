import vueRouter from 'vue-router'
import Vue from 'vue'
import home from './components/home.vue'
import aboutMe from './components/others/aboutMe'
import contactUs from './components/others/contactUs'
import news from './components/others/news'
import projects from './components/others/projects'

import buildDetails from './components/build/buildDetails.vue'

Vue.use(vueRouter)
export const routes =[
  {  path:"/",
    component:home
},
{
  path:'/about-me',
  component:aboutMe
},
{
  path:'/contact-us',
  component:contactUs
}
,
{
  path:'/news',
  component:news
},
{
  path:'/projects',
  component:projects
},
{
  path:'/build/:id',
  component:buildDetails
}
]
export default new vueRouter({
    mode:"history",
    routes
})