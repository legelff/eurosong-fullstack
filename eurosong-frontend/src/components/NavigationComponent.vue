<template>
    <!-- Navigation -->
    <nav>
      <ul>
        <li v-for="(item, index) in navItems" :key="index" 
        class="nav_link"
        @click="setActivePage(item)">
            {{item}}
        </li>
      </ul>
     </nav>
</template>

<script>
    export default {
        name: "NavigationComponent",

        data() {
            return {
                navItems: ["Home", "Artists", "Songs", "Ranking", "Voting"]
            }
        },

        methods: {
            setActivePage(page) {
                this.$emit("setActivePage", page);
            }
        }
    }
</script>

<style>
    ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        justify-content: center;
        gap: 2rem;
        cursor: pointer;
    }

    li {
        opacity: 0.8;
        transition: opacity 0.3s ease-out;
    }

    li:hover {
        opacity: 1;
    }
</style>