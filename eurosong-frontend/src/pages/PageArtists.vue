<template>
    <div class="container">
        <h1>
            Eurosong Artists
        </h1>

        <div class="container-new-artist">
            <label for="new-artist">Create new artist:</label>
            <input type="text" id="new-artist" v-model="newArtist">
            <button type="submit" @click="addArtists()">Add</button>
        </div>

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
                    {{item.name}}
                </td>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "PageArtists",

        mounted() {
            fetch("http://localhost:3000/artists", {
                method: "GET",
            })
                .then((data) => {
                    return data.json();
                })
                .then((_artists) => {
                    // console.log(artists);
                    this.artists = _artists            
                })
        },

        methods: {
            addArtists() {
                fetch("http://localhost:3000/artists", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.newArtist
                    })
                })
                    .then((data) => {
                        return  data.json();
                    })
                    .then((_newArtist) => {
                        this.artists.push({
                            artist_id: _newArtist.artist_id,
                            name: _newArtist.name
                        })
                    }) 
            }
        },

        data() {
            return {
                artists: []
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
    /* border-radius: 10px; */
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

.container-new-artist {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.container-new-artist input, 
.container-new-artist button {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    transition: border 0.3s ease-out;
}

.container-new-artist input:hover, 
.container-new-artist button:hover {
    border: 1px solid rgba(255, 255, 255, 1);
}

.container-new-artist button {
    cursor: pointer;
}

</style>