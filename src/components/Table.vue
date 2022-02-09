<template>
    <div>
        <div class="inline md:hidden w-full">
            <Searchbar class="mx-4 md:mx-0 "/>
            <button class="mx-4 md:mx-0 h-10 mt-3 mb-2.5 w-11/12 justify-center flex px-4 py-2 items-center text-gray-700 text-sm border border-gray-300 rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                <i class="bi bi-filter text-gray-700 text-sm mr-2"></i>
                More filters
            </button>
        </div>
        <div class="mx-4 md:mx-0 flex justify-between items-baseline">
            <div class="flex space-x-3">
                <button class="h-10 flex py-0.5 px-2.5 md:px-4 md:py-2 items-center text-primary-700 bg-primary-50 text-sm rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    All time
                    <i data-feather="x" height="10px" width="10px" class="text-primary-700 ml-2"></i>
                </button>
                <button class="h-10 flex py-0.5 px-2.5 md:px-4 md:py-2 items-center text-primary-700 bg-primary-50 text-sm rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    US, AU, +mb-4
                    <i data-feather="x" height="10px" width="10px" class="text-primary-700 ml-2"></i>
                </button>
                <button class="h-10 hidden md:flex px-4 py-2 items-center text-gray-700 text-sm border border-gray-300 rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                    <i class="bi bi-filter text-gray-700 text-sm mr-2"></i>
                    More filters
                </button>
            </div>
            <Searchbar class="md:inline hidden" />
        </div>
        <div class="overflow-x-auto md:overflow-x-hidden">
            <table class="w-full mt-6 md:mt-7 rounded-lg table-shadow mb-5">
                <tr class="text-xs font-medium border border-gray-200 text-gray-500">
                    <th class="py-3">
                        <i class="bi bi-dash bg-primary-50 text-primary-600 p-1 border border-primary-600 rounded-md"></i>
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
                        <label class="container">
                            <input type="checkbox" :checked="item.checked">
                            <span class="checkmark"></span>
                        </label>
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
                        <div class="-space-x-2 flex">
                            <img v-for="avatar, index in item.avatar" :key="index" :src="require('../assets/avatar/'+avatar+'.png')" :alt="avatar" class="relative inline h-4 w-4 md:h-6 md:w-6"/>
                            <span v-show="item.AvatarNumber != null" class="relative inline rounded-full  text-center md:py-1 bg-primary-50 border border-white text-primary-600 text-xs h-4 w-4 md:h-6 md:w-6">{{item.AvatarNumber}}</span>
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
                <tr class="hidden md:table-row border-t border-gray-200">
                    <td colspan="4">
                        <div class="flex space-x-1">
                            <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-gray-300 rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                                Previous
                            </button>
                            <button class="h-10 flex px-4 py-2 items-center text-gray-700 text-sm border border-gray-300 rounded-lg btn-shadow hover:text-gray-700 hover:bg-gray-200">
                                Next
                            </button>
                        </div>
                    </td>
                    <td colspan="3" class="text-gray-700 text-right text-sm">
                        Page 1 of 10
                    </td>
                </tr>
            </table>
            <div class="mt-4 inline md:hidden">
                <hr class="text-gray-200 mx-4">
                <div class="mb-6 flex justify-between mt-4">
                    <button class="btn-shadow hover:text-gray-700 hover:bg-gray-200">
                        <i data-feather="arrow-left" height="16px" width="16px" class="text-gray-500"></i>
                    </button>
                    <p class="text-gray-700 text-sm">Page 1 of 10</p>
                    <button class="btn-shadow hover:text-gray-700 hover:bg-gray-200">
                        <i data-feather="arrow-right" height="16px" width="16px" class="text-gray-500"></i>
                    </button>
                </div>
            </div>
        </div>
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
    
    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 6px;
        border: 1px solid rgb(127, 86, 217);
        background-color: rgb(249, 245, 255);
    }

    .container:hover input ~ .checkmark {
        background-color: #eee;
    }

    .container input:checked ~ .checkmark {
        background-color: rgb(249, 245, 255);
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .container input:checked ~ .checkmark:after {
        display: block;
    }

    .container .checkmark:after {
        left: 6px;
        top: 3px;
        width: 5px;
        height: 9px;
        border: solid rgb(127, 86, 217);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>