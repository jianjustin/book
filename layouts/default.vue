<template>
    <v-app>
        <v-toolbar color="white" fixed app>
            <v-toolbar-title>JIAN</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text>GITHUB</v-btn>
                <v-btn text>ABOUT ME</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-sheet>
            <v-container fluid>
                <nuxt />
            </v-container>
        </v-sheet>
    </v-app>
</template>
<script>
export default {
    data() {
        return {}
    },

}
</script>