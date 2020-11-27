<template>
    <div>
        <Brand />
        <Model />
        <Variation />
        <Variationvalue />
    </div>
</template>

<script>
import Brand from '../components/brands/Index.vue'
import Model from '../components/models/Index.vue'
import Variation from '../components/variations/Index.vue'
import Variationvalue from '../components/variationvalues/Index.vue'
export default {
    name: 'Resources',
    components: {
        Brand,
        Model,
        Variation,
        Variationvalue,
    }
}
</script>

<style>

.wrapper{
    margin-top: 1rem;
    width: 100%;
    display: felx;
    justify-content: center;
}

.title{
    display: flex;
    justify-content: center;
}

.values{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.update{
    display: flex;
    align-items: center;
    flex-direction: column;
}

</style>