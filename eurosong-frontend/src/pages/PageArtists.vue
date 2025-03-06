<template>
    <div class="container">
        <h1>
            Eurosong Artists
        </h1>

        <table>
            <thead>
                <th>
                    ID
                </th>

                <th>
                    Name
                </th>
            </thead>

            <tbody v-for="(item, index) in artists" :key="index">
                <td>
                    {{item.artist_id}}
                </td>

                <td>
                    {{item.artist_name}}
                </td>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "PageArtists",

        mounted() {
            fetch("http://localhost:3000/artists")
                .then((data) => {
                    return data.json();
                })
                .then((artists) => {
                    console.log(artists);                    
                })
        },

        data() {
            return {
                artists: [
                    // {
                    //     artist_id: 1,
                    //     artist_name: "ABBA"
                    // },
    
                    // {
                    //     artist_id: 2,
                    //     artist_name: "Celine Dion"
                    // }
                ]
            }
        }
    }

</script>

<style>
table {
    width: 50%;
    border-collapse: collapse;
    background-color: transparent;
    color: #000;
    /* border: 1px solid rgba(255,255,255, 0.2); */
    color: #fff;
    margin: 0 auto;
}

th, td {
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 8px;
    text-align: center;
}

th {
    background-color: transparent;
}

tbody tr:nth-child(even) {
    background-color: transparent;
}
</style>