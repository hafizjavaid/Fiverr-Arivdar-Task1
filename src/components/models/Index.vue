<template>
    <div class="wrapper">
        <div class="title">
            <h2>Models</h2>
            <div style="width: 20px"></div>
            <b-button variant="outline-success"
                @click="update('1')">Create</b-button>
        </div>
        <div class="values">
            <b-card v-for="(model, index) in models" :key="index">
                <b-card-text>
                    {{ model.name }}
                </b-card-text>
                <b-card-text>
                    {{ getparent(model.brand) }}
                </b-card-text>
                <div class="actions" v-if="permission(model.created_by)">
                    <b-button variant="outline-warning"
                        @click="update(model)">Update</b-button>
                    <span style="width: 20px"></span>
                    <b-button variant="outline-danger" @click="deleteDialog(index)">Delete</b-button>
                </div>
            </b-card>
        </div>
        <b-modal ref="updater" hide-footer title="Model">
            <Update :updating="updating" />
        </b-modal>
        <b-modal ref="delete" hide-footer title="Model">
            <Delete :action="'model'" :resources="deleting"/>
        </b-modal>
    </div>
</template>

<script>
import Update from './Update.vue'
import Delete from '../Delete.vue'
export default {
    name: 'Models',
    data(){
        return{
            updating: '',
            models: [],
            deleting: ''
        }
    },
    components: { Update, Delete },
    mounted(){
        if(this.$store.state.model == ''){
            fetch(this.$store.state.requrl +"model", this.$store.getters.getRequestOptions('', 'GET'))
                .then(response => response.text())
                .then(result => {
                    result = JSON.parse(result);
                    this.models = result;
                    this.$store.commit('setModel', result)
                })
        }
    },
    methods:{
        update(data){
            this.updating = data;
            this.showModal();
        },
        permission: function(id){
            if(this.$store.state.admin.permissions == id)
                {return true} else {return false}
        },
        showModal() {
            this.$refs['updater'].show();
        },
        deleteDialog(id){
            this.$refs['delete'].show();
            this.deleting = this.models[id];
        },
        getparent(id){
            for(var i = 0; i<= this.$store.state.brand.length; i++){
                if(this.$store.state.brand[i].id == id){
                    return this.$store.state.brand[i].name
                }
            }
        }
    }
}
</script>