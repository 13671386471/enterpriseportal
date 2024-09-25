

<template>
    <div>
        <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                    background: {
                        color: {
                            value: '#0d47a1'// '#2d3a4b'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce'
                            },
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        }
                    },
                    detectRetina: true
                }"
        />
        
        <div id="formContainer">
            <h3>企业门户网站管理系统</h3>
            <el-form
                ref="loginFormRef"
                :model="loginForm"
                status-icon
                :rules="loginRules"
                label-width="80px"
                class="loginForm"
            >
                <el-form-item 
                    label="用户名" 
                    prop="username"
                >
                <el-input 
                    v-model="loginForm.username"
                    autocomplete="off" 
                />
                </el-form-item>
                <el-form-item 
                    label="密码" 
                    prop="password"
                >
                <el-input
                    v-model="loginForm.password"
                    type="password"
                    autocomplete="off"
                />
                </el-form-item>
                <el-form-item>
                    <el-button 
                        type="primary" 
                        @click="handleLogin()"
                    >
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
   

<script setup>
// 在Vue 3中，<script setup>是一种新的脚本撰写方式，
// 它提供了更加简洁和直观的方式来定义组件逻辑。这种方式主要特点包括：
// 1、直接暴露组合API: 在<script setup>中编写的组合函数（如ref, reactive等）
//    可以直接在模板中使用，无需通过export default导出或使用data函数。
// 2、简化父组件到子组件的Props传递: 通过自动解构Props，并且不需要显式声明props选项。
// 3、内联事件处理器: 可以直接在模板中使用事件处理器，而不需要在methods中定义它们。
// 4、自动状态提升: 对于共享状态或者公用方法，可以自动提升到组件顶部，
//    使得多个组合函数间共享数据更为方便。
// 这种方式特别适合构建更小、更可组合的Vue应用，使得组件更加轻量级并且易于理解和维护。
// 不过需要注意的是，不是所有的构建工具都默认支持<script setup>语法，
// 可能需要配置相应的插件来启用这一特性。

// ************引入区域**************
    import {reactive, ref } from 'vue';
    import { useRouter } from 'vue-router';

// ************响应式对象定义，变量定义区域**************
    const router = useRouter(); 
    const loginForm = reactive({
        username: '',
        password: ''
    })
    // 表单引用对象
    const loginFormRef = ref();

    const loginRules = reactive({
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
    })

// ************方式定义区域**************
    // 提交表单
    function handleLogin(){
        //1、 校验表单
        loginFormRef.value.validate(valid => {
            if(valid){
                localStorage.setItem('token', '123')
                router.push('/')
            }else{
                return false
            }
        })
        //2、提交表单
        //3、提交成功后设置Token
    }
</script>

<style scoped lang="scss">
// scoped 表示该样式只对当前组件有效, 不会影响其他组件;同时加上scoped后，
// 样式会自动添加一个随机的类名[data-v-*]，以使样式只在当前组件中生效。
#formContainer{
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.6);
    padding: 20px;
    color: #fff;
    text-align: center;
    h3{
        font-size: 30px
    }
}
// 表示深度选择器
// ::v-deep 表示样式穿透，可以访问子组件的样式
::v-deep .el-form-item__label{
    color: #fff;
}
</style>