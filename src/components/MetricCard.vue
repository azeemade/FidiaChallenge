<template>
    <div class="justify-between my-8 flex">
        <div v-for="item, index in data" :key="index" class="p-6 metric-shadow border border-gray-200 rounded-lg">
            <div class="flex justify-between mb-6">
                <p class="text-base font-medium">{{item.title}}</p>
                <i data-feather="more-vertical" height="20px" width="20px" class="text-gray-500"></i>
            </div>
            <div class="flex">
                <div>
                    <p class="font-bold text-4xl text-gray-900 mb-4">{{item.figure}}</p>
                    <div class="flex items-center mr-8">
                        <i data-feather="arrow-up" height="10px" width="10px" :class="'mr-2 '+item.color"></i>
                        <p :class="'text-sm mr-1 '+item.color">{{item.percent}}%</p>
                        <p class="text-sm text-gray-500">vs last month</p>
                    </div>
                </div>
                <img :src="require(`../assets/chart/${item.chart}.png`)" alt="chart">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MetricCard',
    data(){
        return{
            data: [
                {
                    title: 'Total customers',
                    figure: '2,420',
                    percent: 40,
                    color: 'text-success-700',
                    chart: '_Chart1'
                },
                {
                    title: 'Members',
                    figure: '1,210',
                    percent: 10,
                    color: 'text-error-700',
                    chart: '_Chart'
                },
                {
                    title: 'Active now',
                    figure: '316',
                    percent: 20,
                    color: 'text-success-700',
                    chart: '_Chart1'
                }
            ]
        }
    }
}
</script>
<style>
    .metric-shadow{
        box-shadow: 0px 1px 2px 0px #1018280F;
        box-shadow: 0px 1px 3px 0px #1018281A;

    }
</style>