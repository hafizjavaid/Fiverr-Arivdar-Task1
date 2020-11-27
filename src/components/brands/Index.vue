<template>
    <div class="wrapper">
        <div class="title">
            <h2>Brands</h2>
            <div style="width: 20px"></div>
            <b-button variant="outline-success"
                @click="update('1')">Create</b-button>
        </div>
        <div class="values">
            <b-card v-for="(brand, index) in brands" :key="index">
                <b-card-text>
                    {{ brand.name }}
                </b-card-text>
                <div class="actions" v-if="permission(brand.created_by)">
                    <b-button variant="outline-warning"
                        @click="update(brand)">Update</b-button>
                    <span style="width: 20px"></span>
                    <b-button variant="outline-danger" @click="deleteDialog(index)">Delete</b-button>
                </div>
            </b-card>
        </div>
        <b-modal ref="updater" hide-footer title="Brand">
            <Update :updating="updating" />
        </b-modal>
        <b-modal ref="delete" hide-footer title="Brand">
            <Delete :action="'brand'" :resources="deleting"/>
        </b-modal>
    </div>
</template>

<script>
import Update from './update.vue'
import Delete from '../Delete.vue'
export default {
    name: 'Brand',
    data(){
        return{
            brands: [],
            updating: '',
            deleting:''
        }
    },
    components: { Update, Delete },
    mounted(){
        if(this.$store.state.brand == ''){
            fetch(this.$store.state.requrl +"brand", this.$store.getters.getRequestOptions('', 'GET'))
                .then(response => response.text())
                .then(result => {
                    result = JSON.parse(result);
                    this.brands = result;
                    this.$store.commit('setBrand', result)
                })
        }
    },
    methods:{
        permission: function(id){
            if(this.$store.state.admin.permissions == id)
                {return true} else {return false}
        },
        showModal() {
            this.$refs['updater'].show();
        },
        update(data){
            this.updating = data;
            this.showModal();
        },
        deleteDialog(id){
            this.$refs['delete'].show();
            this.deleting = this.brands[id];
        }
    }
}
</script>