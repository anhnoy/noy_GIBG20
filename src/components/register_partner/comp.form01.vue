<template>
    <div>
        <form @submit="AdminViewModel.updateAdmin">
            <v-input v-model="admin.name" ></v-input>

        </form>
    </div>
</template>

<script setup>
import AdminViewModel, { admin } from '../../viewmodels/register_partner/comp.form01.viewmodel';
</script>

<style lang="scss" scoped>

</style>