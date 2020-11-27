<template>
    <div class="wrapper">
        <div class="title">
            <h2>Variation values</h2>
            <div style="width: 20px"></div>
            <b-button variant="outline-success"
                @click="update('1')">Create</b-button>
        </div>
        <div class="values">
            <b-card v-for="(variationvalue, index) in variationvalues" :key="index">
                <b-card-text>
                    {{ variationvalue.value }}
                </b-card-text>
                <b-card-text>
                    {{ getparent(variationvalue.variation) }}
                </b-card-text>
                <div class="actions" v-if="permission(variationvalue.created_by)">
                    <b-button variant="outline-warning"
                        @click="update(variationvalue)">Update</b-button>
                    <span style="width: 20px"></span>
                    <b-button variant="outline-danger" @click="deleteDialog(index)">Delete</b-button>
                </div>
            </b-card>
        </div>
        <b-modal ref="updater" hide-footer title="Variation value">
            <Update :updating="updating" />
        </b-modal>
        <b-modal ref="delete" hide-footer title="Variation value">
            <Delete :action="'variationvalue'" :resources="deleting"/>
        </b-modal>
    </div>
</template>

<script>
import Update from './Update.vue'
import Delete from '../Delete.vue'
export default {
    name: 'Variationvalue',
    data(){
        return{
            updating: '',
            variationvalues: [],
            deleting: ''
        }
    },
    components: { Update, Delete },
    mounted(){
        if(this.$store.state.variationvalue == ''){
            fetch(this.$store.state.requrl +"variationvalue", this.$store.getters.getRequestOptions('', 'GET'))
                .then(response => response.text())
                .then(result => {
                    result =JSON.parse(result);
                    this.variationvalues = result;
                    this.$store.commit('setVariationvalue', result)
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
            for(var i = 0; i<= this.$store.state.variation.length; i++){
                if(this.$store.state.variation[i].id == id){
                    return this.$store.state.variation[i].name
                }
            }
        }
    }
}
</script>