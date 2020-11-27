<template>
    <div class="login">
        <h2>Ezystore admin login</h2>
        <div style="height: 20px"></div>
        <b-input-group>
            <b-input-group-prepend>
                <span class="input-group-text"><b-icon-person-fill /></span>
            </b-input-group-prepend>
            <b-form-input placeholder="example@mail.com" type="email" :state="validation" 
                v-model="email" autocomplete="false"/>
        </b-input-group>
        <div style="height: 30px"></div>
        <b-input-group>
            <b-input-group-prepend>
                <span class="input-group-text"><b-icon-lock-fill /></span>
            </b-input-group-prepend>
            <b-form-input  placeholder="password" type="password" v-model="password"/>
        </b-input-group>
        <div style="height: 30px"></div>
        <div v-if="!loading">
            <b-btn variant="outline-success" :disabled="!btnvalidation" @click="login">Login</b-btn>
        </div>
        <div v-else>
            <b-spinner type="grow" variant="success" label="Spinning"></b-spinner>
        </div>
        <div style="height: 30px"></div>
        <div  v-if="error">
            <span style="color: red;">Wrong credentials! Please try again</span>
        </div>
    </div>
</template>

<script>
import { serialize } from 'object-to-formdata';
import router from '../router/index'

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: '',
            error: false,
            loading: false
        }
    },
    mounted(){
        if(this.$store.state.admin.token !== undefined){
            router.push({ path: '/' })
        }
    },
    computed :{
        validation(){
            return /\S+@\S+\.\S+/.test(this.email)
        },
        btnvalidation(){
            return this.validation && this.password.length > 3
        }
    },
    methods:{
        login(){
            this.loading = true;
            const formdata = serialize({ email: this.email, password: this.password });
            var requestOptions = { method: 'POST', body: formdata };
            fetch(this.$store.state.requrl+ "admin/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    if( result == 0) {
                        this.error = true;this.loading = false;
                        this.email = ''; this.password='';
                    }else{
                        this.$store.commit('setadmin', JSON.parse(result))
                        router.push({ path: '/' })
                    }
                })
        }
    }
}
</script>

<style scoped>

.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 50px;
    width: 40%;
    margin-top: 5rem;
    border: 1px solid red;
    border-radius: 10px;
}

</style>