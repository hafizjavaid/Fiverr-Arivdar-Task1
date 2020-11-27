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
            ></b-form-input>
        </b-form-group>
        <label>Brand</label>
        <b-form-select v-model="brand">
            <b-select-option v-for="brand in brands" 
                :key="brand.id" :value="brand.id" autocomplete="off">
                {{ brand.name }}
            </b-select-option>
        </b-form-select>
        <br />
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
export default {
    name:'Create',
    props:['updating'],
    data(){
      return{
          name: '',
          id:'',
          created_by: '',
          brand: 0
      }  
    },
    mounted(){
        if ( this.updating != '1'){
            this.id = this.updating.id;
            this.name = this.updating.name;
            this.created_by = this.updating.created_by;
            this.brand = this.updating.brand;
        } else{
            this.created_by = this.$store.state.admin.permissions;
            this.id = 0; this.brand = 0;
        }
    },
    computed:{
        validate: function(){
           if (this.name === undefined) return true;
           if (this.name.length < 2 || this.brand == 0) return true
           else return false;
        },
        brands: function() {
            return this.$store.state.brand;
        }
    },
    methods:{
        update(){
            fetch(this.$store.state.requrl +"model", this.$store.getters.getRequestOptions(
                    serialize({ name: this.name, id: this.id, brand: this.brand }), 'PUT'))
                .then(response => response.text())
                .then( () => location.reload())
        },
        create(){
            fetch(this.$store.state.requrl +"model", this.$store.getters.getRequestOptions(
                    serialize({ name: this.name, creator: this.created_by, brand: this.brand }),
                        'POST'))
                .then(response => response.text())
                .then( () => location.reload())
        }
    }
}
</script>