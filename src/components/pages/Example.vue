<template>
<div class="example">
    <p>Count {{ count }}!</p>
    <button @click="increment">+</button>
</div>
</template>

<style scoped>
.example {
    font-size: 100px;
    color: red;
}
</style>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count += 1;
        },
    },
}
</script>
