<template>
    <div class="hidden md:flex justify-between items-center my-4 mx-28">
        <div class="flex items-center">
            <Logo />
            <div class="ml-7 space-x-7">
                <router-link :to="item.link" class="text-gray-700 font-medium" v-for="item, index in data" :key="index">{{item.title}}</router-link>
            </div>
        </div>
        <div class="space-x-6 flex">
            <button class="flex px-4 py-2 items-center text-gray-700 text-sm border border-gray-300 rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                <i data-feather="zap" height="16px" width="16px" class="text-gray-700 text-xl mr-2"></i>
                Upgrade now
            </button>
            <button class="rounded-full p-1 focus:shadow-outline hover:bg-gray-200">
                <i data-feather="settings" height="20px" width="20px" class="text-xl text-gray-500"></i>
            </button>
            <button class="rounded-full p-1 focus:shadow-outline hover:bg-gray-200">
                <i data-feather="bell" height="20px" width="20px" class="text-xl text-gray-500"></i>
            </button>
            <button class="focus:shadow-outline">
                <img src="../assets/avatar/Avatar.png" alt="User avatar">
            </button>
        </div>
    </div>
    <div class="flex md:hidden justify-between m-4 align-center">
        <Logo />
        <button class="rounded-full p-1 focus:shadow-outline hover:bg-gray-200">
            <i data-feather="menu" height="20px" width="20px" class="text-xl text-gray-500"></i>
        </button>
    </div>
</template>
<script>
import Logo from "./Logo.vue";
import feather from 'feather-icons'
export default {
    name: "UpperNavbar",
    components: { Logo },
    data(){
        return{
            data: [
                {
                    link: '/Other',
                    title: 'Home'
                },
                {
                    link: '/',
                    title: 'Dashboard'
                },
                {
                    link: '/Other',
                    title: 'Projects'
                },
                {
                    link: '/Other',
                    title: 'Tasks'
                },
                {
                    link: '/Other',
                    title: 'Reporting'
                },
                {
                    link: '/Other',
                    title: 'Users'
                }
            ]
        }
    },
    mounted() {
        feather.replace();
    }
}
</script>
<style>
    .btn-shadow{
        box-shadow: 0px 1px 2px 0px #1018280D;
    }
</style>