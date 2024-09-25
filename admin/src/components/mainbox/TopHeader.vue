
<template>
    <el-header>
        <el-button @click="handleCollapsed">click</el-button>
        Header
    </el-header>
</template>


<script setup>
    import { useStore } from 'vuex';

    const store = useStore();
    const handleCollapsed = () => {
        store.commit('changeCollapsed')
    }
</script>