<template>
    <div class="container">
        <h1>
            Eurosong Ranking
        </h1>

        <table>
            <thead>
                <th>
                    Ranking
                </th>

                <th>
                    Song
                </th>

                <th>
                    Points
                </th>
            </thead>

            <tbody v-for="(item, index) in rankings" :key="index">
                <td>
                    {{item.artists.name}}
                </td>

                <td>
                    {{item.name}}
                </td>

                <td>
                    {{item.points}}
                </td>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "PageRanking",

        mounted() {
            fetch("http://localhost:3000/ranking", {
                method: "GET",
            })
            .then((data) => {
                return data.json();
            })
            .then((_rankings) => {
                // console.log(artists);
                this.rankings = _rankings            
            })
        },

        data() {
            return {
                rankings: []
            }
        }
    }
</script>

<style>

</style>