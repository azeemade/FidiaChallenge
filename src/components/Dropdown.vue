<template>
    <div>
        <ul>
            <li v-for="item, index in data" :key="index">
                <router-link :to="item.link" class="text-gray-700 font-medium">{{item.title}}</router-link>
                <ul>
                    <li v-for="foo, index in item.sub" :key="index">
                        <router-link :to="foo.link" class="text-gray-700 font-medium">{{foo.title}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Dropdown',
    data(){
        return{
            data: [
                { title: 'Home', link: '/Other' }, 
                {
                    title: 'Dashboard',
                    link: '/',
                    sub: [
                            {title: 'Overview', link: '/'}, 
                            {title: 'Notifications', link: '/Other'},
                            {titlle: 'Analytics', link: '/Other'},
                            {title: 'Saved reports', link: '/Other'}, 
                            {title: 'Trade history', link: '/Other'},
                            {title:'User reports', link: '/Other'}
                    ],
                },
                { title: 'Projects', link: '/Other' }, { title: 'Tasks', link: '/Other' },
                { title: 'Reporting', link: '/Other' }, { title: 'Users', link: '/Other' }
            ]
        }
    }
}
</script>