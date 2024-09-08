

<template>
    <div>
        <el-button @click="handleLogin">登录</el-button>
    </div>
</template>


<script setup>

    function handleLogin(){
        localStorage.setItem('token', '123')
    }
</script>