<template>
    <div class="hidden md:flex justify-between items-baseline mb-4 mx-28">
        <div class="space-x-7 mt-5">
            <router-link :to="item.link" class="text-gray-700 font-medium" v-for="item, index in data" :key="index">{{item.title}}</router-link>
        </div>
        <Searchbar />
    </div>
</template>
<script>
import Searchbar from "./Searchbar.vue"
export default {
    name: "LowerNavbar",
    data() {
        return {
            data: [
                {
                    link: "/",
                    title: "Overview"
                },
                {
                    link: "/Other",
                    title: "Notifications"
                },
                {
                    link: "/Other",
                    title: "Analytics"
                },
                {
                    link: "/Other",
                    title: "Saved reports"
                },
                {
                    link: "/Other",
                    title: "Trade history"
                },
                {
                    link: "/Other",
                    title: "User reports"
                }
            ]
        };
    },
    components: { Searchbar }
}
</script>