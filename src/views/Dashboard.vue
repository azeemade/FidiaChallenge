<template>
    <div class="mx-28">
        <div class="flex justify-between mt-12 mb-8">
            <div>
                <p class="text-3xl text-gray-900 font-medium">Welcome back, Olivia</p>
                <p class="text-gray-500">Track, manage and forecast your customers and orders.</p>
            </div>
            <div class="flex space-x-3">
                <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-d0d5dd rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                    <i data-feather="upload-cloud" height="20px" width="20px" class="text-gray-700 text-sm mr-2 "></i>
                    Import
                </button>
                <button class="h-10 flex px-4 py-2 items-center bg-primary-600 text-white text-sm  rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    <i data-feather="plus" height="20px" width="20px" class="text-white text-sm mr-2"></i>
                    Add
                </button>
            </div>
        </div>
        <MetricCard />
        <Table />
    </div>
</template>
<script>
import feather from 'feather-icons'
import MetricCard from '../components/MetricCard.vue';
import Table from '../components/Table.vue';
export default {
    name: "Dashboard",
    mounted() {
        feather.replace();
    },
    components: { MetricCard, Table }
}
</script>