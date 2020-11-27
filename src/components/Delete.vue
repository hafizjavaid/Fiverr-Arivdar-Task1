<template>
    <div class="update">
        <h4> Confirm delete {{ resources.name }} </h4>
        <b-btn variant="outline-danger" @click="confirmDelete">Delete</b-btn>
    </div>
</template>
<script>
export default {
    name: "Delete",
    props: ["resources", "action"],
    methods:{
        confirmDelete(){
            fetch(this.$store.state.requrl + this.action + '?id=' + this.resources.id, 
            this.$store.getters.getRequestOptions('', 'DELETE'))
                .then(response => response.text())
                .then( () => location.reload())
        }
    }
}
</script>