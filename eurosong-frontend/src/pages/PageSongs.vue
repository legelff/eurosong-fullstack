<template>
    <div class="container">
        <h1>
            Eurosong Songs
        </h1>

        <table>
            <thead>
                <th>
                    ID
                </th>

                <th>
                    Song
                </th>

                <th>
                    Artist
                </th>
            </thead>

            <tbody v-for="(item, index) in songs" :key="index">
                <td>
                    {{item.song_id}}
                </td>

                <td>
                    {{item.name}}
                </td>

                <td>
                    {{item.artists.name}}
                </td>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "PageSongs",

        mounted() {
            fetch("http://localhost:3000/songs", {
                method: "GET" // optional parameter
            })
                .then((data) => {
                    return data.json();
                })
                .then((_songs) => {
                    this.songs = _songs;
                })
        },

        data() {
            return {
                songs: []
            }
        }
    }

</script>

<style>

</style>