<template>
    <div class="wrapper">
        <div class="title">
            <h2>Variations</h2>
            <div style="width: 20px"></div>
            <b-button variant="outline-success"
                @click="update('1')">Create</b-button>
        </div>
        <div class="values">
             <b-card v-for="(variation, index) in variations" :key="index">
                <b-card-text>
                    {{ variation.name }}
                </b-card-text>
                <div class="actions" v-if="permission(variation.created_by)">
                    <b-button variant="outline-warning"
                        @click="update(variation)">Update</b-button>
                    <span style="width: 20px"></span>
                    <b-button variant="outline-danger" @click="deleteDialog(index)">Delete</b-button>
                </div>
            </b-card>
        </div>
        <b-modal ref="updater" hide-footer title="Variation">
            <Update :updating="updating" />
        </b-modal>
        <b-modal ref="delete" hide-footer title="Variation">
            <Delete :action="'variation'" :resources="deleting"/>
        </b-modal>
    </div>
</template>

<script>
import Delete from '../Delete.vue'
import Update from './Update.vue'
export default {
    name: 'Variation',
    data(){
        return{
            variations: [],
            updating: '',
            deleting:''
        }
    },
    components:{ Delete, Update },
    mounted(){
        if(this.$store.state.variation == ''){
            fetch(this.$store.state.requrl +"variation", this.$store.getters.getRequestOptions('', 'GET'))
                .then(response => response.text())
                .then(result => {
                    result = JSON.parse(result);
                    this.variations = result;
                    this.$store.commit('setVariation', result)
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
            this.deleting = this.variations[id];
        }
    }
}
</script>