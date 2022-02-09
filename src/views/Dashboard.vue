<template>
    <div class="mx-0 md:mx-28">
        <div class="mx-4 md:mx-0 block md:flex justify-between mt-12 mb-8">
            <div>
                <p class="text-3xl text-gray-900 font-medium mb-1">Welcome back, Olivia</p>
                <p class="text-gray-500">Track, manage and forecast your customers and orders.</p>
            </div>
            <div class="flex space-x-3 mt-4 md:mt-0">
                <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-gray-300 rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                    <i data-feather="upload-cloud" height="16px" width="16px" class="text-gray-700 mr-2 "></i>
                    Import
                </button>
                <button class="h-10 flex px-4 py-2 items-center bg-primary-600 text-white text-sm  rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    <i data-feather="plus" height="16px" width="16px" class="text-white mr-2"></i>
                    Add
                </button>
            </div>
        </div>
        <MetricCard/>
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