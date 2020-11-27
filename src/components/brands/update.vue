<template>
    <div class="update">
        <b-form-group
            id="input-group-1"
            label="Name"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="name"
            type="text"
            required
            placeholder="name"
            autocomplete="off"
            ></b-form-input>
        </b-form-group>
        <div class="actions">
            <b-button variant="outline-success" v-if="id != ''"
                :disabled="validate" @click="update">Update</b-button>
            <b-button variant="outline-success" v-if="id == 0"
             :disabled="validate" @click="create">Create</b-button>
        </div>
    </div>
</template>

<script>
import { serialize } from 'object-to-formdata';
import Vue from 'vue'
export default Vue.extend({
    name:'Create',
    props:['updating'],
    data(){
      return{
          name: '',
          id:'',
          created_by: '',
      }  
    },
    mounted(){
        if ( this.updating != '1'){
            this.id = this.updating.id;
            this.name = this.updating.name;
            this.created_by = this.updating.created_by;
        } else{
            this.created_by = this.$store.state.admin.permissions;
            this.id = 0;
        }
    },
    computed:{
        validate: function(){
           if (this.name === undefined) return true;
           if (this.name.length < 2) return true
           else return false;
        }
    },
    methods:{
        update(){
            fetch(this.$store.state.requrl +"brand", this.$store.getters.getRequestOptions(
                    serialize({ name: this.name, id: this.id }), 'PUT'))
                .then(response => response.text())
                .then( () => location.reload())
        },
        create(){
            fetch(this.$store.state.requrl +"brand", this.$store.getters.getRequestOptions(
                    serialize({ name: this.name, creator: this.created_by }), 'POST'))
                .then(response => response.text())
                .then( () => location.reload())
        }
    }
})
</script>