
import Home from '@/views/home/Home.vue';
import Center from '@/views/center/Center.vue';
import UserAdd from '@/views/user-manage/UserAdd.vue';
import UserList from '@/views/user-manage/UserList.vue';

import ProductAdd from '@/views/product-manage/ProductAdd.vue';
import ProductList from '@/views/product-manage/ProductList.vue';

import NewsAdd from '@/views/news-manage/NewsAdd.vue';
import NewsList from '@/views/news-manage/NewsList.vue';

const routers = [
    {
        path: '/index',// 因为此时是绝对路径所以浏览器url中不用加/mainbox就能匹配到，如果用./index的话就要加上前缀/mainbox才能匹配上这个路由组件
        name: 'home',
        component: Home
    },
    {
        path: '/center',// 因为此时是绝对路径所以浏览器url中不用加/mainbox就能匹配到，如果用./index的话就要加上前缀/mainbox才能匹配上这个路由组件
        name: 'center',
        component: Center
    },
    {
        path: '/user-manage/adduser',
        component: UserAdd
    },
    {
        path: '/user-manage/userlist',
        component: UserList
    },

    {
        path: '/news-manage/addnews',
        component: NewsAdd
    },
    {
        path: '/news-manage/newslist',
        component: NewsList
    },

    {
        path: '/product-manage/addproduct',
        component: ProductAdd
    },
    {
        path: '/user-manage/productlist',
        component: ProductList
    },
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/:pathMatch(.*)*',
        name: '',
        component: () => import('@/views/404.vue')
    }
]

export default routers;