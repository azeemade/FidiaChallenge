<template>
    <div>
        <div class="flex justify-between items-baseline">
            <div class="flex space-x-3">
                <button class="h-10 flex px-4 py-2 items-center text-primary-700 bg-primary-50 text-sm rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    All time
                    <i data-feather="x" height="10px" width="10px" class="text-primary-700 ml-2"></i>
                </button>
                <button class="h-10 flex px-4 py-2 items-center text-primary-700 bg-primary-50 text-sm rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    US, AU, +mb-4
                    <i data-feather="x" height="10px" width="10px" class="text-primary-700 ml-2"></i>
                </button>
                <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-d0d5dd rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                    <!-- <i data-feather="filters lines" height="16px" width="16px" class="text-gray-700 text-sm mr-2"></i> -->
                    More filters
                </button>
            </div>
            <Searchbar />
        </div>

        <table class="w-full mt-7 table-shadow mb-5">
            <tr class="text-xs font-medium text-gray-500">
                <th class="py-3">
                    <i data-feather="minus" class="text-primary-50 p-2 border border-primary-50 rounded-md"></i>
                </th>
                <th class="flex">
                    Company
                    <i data-feather="arrow-down" height="16px" width="16px" class="text-gray-500 ml-2"></i>
                </th>
                <th>License use</th>
                <th>Status</th>
                <th>Users</th>
                <th>About</th>
                <th></th>
            </tr>
            <tr v-for="item, index in data" :key="index">
                <td class="py-4">
                    <input type="checkbox" value="" :checked="item.checked" class="accent-primary-50">
                </td>
                <td class="flex items-center">
                    <div class="mr-3">
                        <img :src="require('../assets/avatar/'+item.logo+'.png')" :alt="item.logo">
                    </div>
                    <div>
                        <p class="mb-0 text-gray-900 text-sm">{{item.company}}</p>
                        <p class="mb-0 text-gray-500 text-sm">{{item.link}}</p>
                    </div>
                </td>
                <td>
                    <div class="bg-primary-50 rounded h-2 w-20"><div class="bg-primary-600 rounded h-2" :class="item.width"></div></div>
                </td>
                <td>
                    <span class="py-0.5 px-2 rounded-xl text-xs" :class="item.StatusStyle">{{item.status}}</span>
                </td>
                <td>
                    <div class="-space-x-4">
                        <img v-for="avatar, index in item.avatar" :key="index" :src="require('../assets/avatar/'+avatar+'.png')" :alt="avatar" class="relative inline h-6 w-6"/>
                        <span v-show="item.AvatarNumber != null" class="relative inline rounded-full p-2 bg-primary-50 border border-white text-primary-600 text-xs h-6 w-6">{{item.AvatarNumber}}</span>
                    </div>
                </td>
                <td>
                    <p class="mb-0 text-gray-900 text-sm">{{item.about1}}</p>
                    <p class="mb-0 text-gray-500 text-sm">{{item.about2}}</p></td>
                <td class="flex">
                    <i data-feather="trash-2" height="16px" width="16px" class="text-gray-500"></i>
                    <i data-feather="edit-2" height="16px" width="16px" class="text-gray-500 ml-2"></i>
                </td>
            </tr>
            <tr class="border-t border-gray-200">
                <td colspan="4">
                    <div class="flex space-x-1">
                        <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-d0d5dd rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                            Previous
                        </button>
                        <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-d0d5dd rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                            Next
                        </button>
                    </div>
                    
                </td>
                <td colspan="3" class="text-gray-700 text-right text-sm">
                    Page 1 of 10
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import feather from 'feather-icons'
import Searchbar from "./Searchbar.vue";
export default {
    name: "Table",
    components: { Searchbar },
    data(){
        return{
            data: [
                {
                    checked: true,
                    logo: 'Avatar23',
                    company: 'Catalog',
                    link: 'catalogapp.io',
                    width: 'w-16',
                    StatusStyle: 'text-success-700 bg-success-50',
                    status: 'Customer',
                    avatar: [
                        'Avatar22', 'Avatar33', 'Avatar12',
                        'Avatar-15', 'Avatar09'
                    ],
                    AvatarNumber: '+5',
                    about1: 'Content curating app',
                    about2: 'Brings all your news into one place'
                },
                {
                    checked: true,
                    logo: 'Avatar-1',
                    company: 'Circooles',
                    link: 'getcircooles.com',
                    width: 'w-14',
                    StatusStyle: 'text-gray-700 bg-gray-100',
                    status: 'Churned',
                    avatar: [
                        'Avatar24', 'Avatar25', 'Avatar-7',
                        'Avatar-8', 'Avatar-9'
                    ],
                    AvatarNumber: '+8',
                    about1: 'Design software',
                    about2: 'Super lightweight design app'
                },
                {
                    checked: true,
                    logo: 'Avatar-2',
                    company: 'Command+R',
                    link: 'cmdr.ai',
                    width: 'w-8',
                    StatusStyle: 'text-success-700 bg-success-50',
                    status: 'Customer',
                    avatar: [
                        'Avatar-9', 'Avatar-11', 'Avatar-12',
                        'Avatar-8', 'Avatar-14'
                    ],
                    AvatarNumber: '+2',
                    about1: 'Data prediction',
                    about2: 'AI and machine learning data'
                },
                {
                    checked: false,
                    logo: 'Avatar-3',
                    company: 'Hourglass',
                    link: 'hourglass.app',
                    width: 'w-20',
                    StatusStyle: 'text-success-700 bg-success-50',
                    status: 'Customer',
                    avatar: [
                        'Avatar09', 'Avatar33', 'Avatar24',
                        'Avatar25', 'Avatar-11'
                    ],
                    AvatarNumber: null,
                    about1: 'Productivity app',
                    about2: 'Time management and productivity'
                },
                {
                    checked: false,
                    logo: 'Avatar-4',
                    company: 'Layer',
                    link: 'getlayers.io',
                    width: 'w-16',
                    StatusStyle: 'text-gray-700 bg-gray-100',
                    status: 'Churned',
                    avatar: [
                        'Avatar12', 'Avatar24', 'Avatar-11',
                        'Avatar-8', 'Avatar-9'
                    ],
                    AvatarNumber: '+1',
                    about1: 'Web app integrations',
                    about2: 'Connect web apps seamlessly'
                },
                {
                    checked: true,
                    logo: 'Avatar-5',
                    company: 'Quotient',
                    link: 'quotient.co',
                    width: 'w-5',
                    StatusStyle: 'text-success-700 bg-success-50',
                    status: 'Customer',
                    avatar: [
                        'Avatar09', 'Avatar12', 'Avatar-11',
                        'Avatar24', 'Avatar-12'
                    ],
                    AvatarNumber: '+6',
                    about1: 'Sales CRM',
                    about2: 'Web-based sales doc management'
                },
                {
                    checked: true,
                    logo: 'Avatar-6',
                    company: 'Sisyphus',
                    link: 'sisyphus.com',
                    width: 'w-16',
                    StatusStyle: 'text-success-700 bg-success-50',
                    status: 'Customer',
                    avatar: [
                        'Avatar25', 'Avatar-12', 'Avatar-7',
                        'Avatar-11', 'Avatar-15'
                    ],
                    AvatarNumber: '+4',
                    about1: 'Automation and workflow',
                    about2: 'Time tracking, invoicing and expenses'
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
    .table-shadow{
        box-shadow: 0px 2px 4px -2px #1018280F;
        box-shadow: 0px 4px 8px -2px #1018281A;

    }
</style>