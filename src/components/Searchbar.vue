<template>
    <div class="group relative">
        <i data-feather="search" height="16px" width="16px" class="absolute left-3 top-1/2 -mt-2.5 text-gray-500 pointer-events-none" aria-hidden="true"></i>
        <input type="text" class="search-shadow rounded-lg h-11 w-80 py-2 pl-10 border-b border-d0d5dd placeholder-gray-500" placeholder="Search">
    </div>
</template>
<script>
import feather from 'feather-icons'
export default {
        name: 'Searchbar',
        mounted() {
            feather.replace();
        }
}
</script>
<style>
    .search-shadow{
        box-shadow: 0px 1px 2px 0px #1018280D;
    }
</style>