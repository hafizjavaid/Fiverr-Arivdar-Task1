<template>
    <div class="update">
    <b-form-group
            id="input-group-1"
            label="Value"
            label-for="input-1"
        >
            <b-form-input
            id="input-1"
            v-model="value"
            type="text"
            required
            placeholder="value"
            ></b-form-input>
        </b-form-group>
        <label>Variation</label>
        <b-form-select v-model="variation">
            <b-select-option v-for="variation in variations" 
                :key="variation.id" :value="variation.id" autocomplete="off">
                {{ variation.name }}
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
          value: '',
          id:'',
          created_by: '',
          variation: 0
      }  
    },
    mounted(){
        if ( this.updating != '1'){
            this.id = this.updating.id;
            this.value = this.updating.value;
            this.created_by = this.updating.created_by;
            this.variation = this.updating.variation;
        } else{
            this.created_by = this.$store.state.admin.permissions;
            this.id = 0; this.variation = 0;
        }
    },
    computed:{
        validate: function(){
           if (this.value === undefined) return true;
           if (this.value.length < 2 || this.variation == 0) return true
           else return false;
        },
        variations: function() {
            return this.$store.state.variation;
        }
    },
    methods:{
        update(){
            fetch(this.$store.state.requrl +"variationvalue", this.$store.getters.getRequestOptions(
                    serialize({ value: this.value, id: this.id, variation: this.variation }), 'PUT'))
                .then(response => response.text())
                .then( () => location.reload())
        },
        create(){
            fetch(this.$store.state.requrl +"variationvalue", this.$store.getters.getRequestOptions(
                    serialize({ value: this.value, creator: this.created_by, variation: this.variation }),
                        'POST'))
                .then(response => response.text())
                .then( () => location.reload())
        }
    }
}
</script>