<template>
    <div class="container">
        <h1>
            Eurosong Voting
        </h1>


        <div class="container-song-carousel">
            <button>
                <i class='bx bx-chevron-left' @click="prevSong()"></i>
            </button>
            <p>
              {{songs[currSong].name}} - {{songs[currSong].artists.name}}
            </p>
            <button>
                <i class='bx bx-chevron-right' @click="nextSong()"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageVoting",

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

        methods: {
            nextSong() {
                if (this.currSong < this.songs.length) {
                    this.currSong++;
                    console.log(this.currSong)
                }
            },

            prevSong() {
                if (this.currSong > 0) {
                    this.currSong--;
                    console.log(this.currSong)
                }
            }
        },

        data() {
            return {
                songs: [],
                currSong: 0
            }
        }
    }
</script>

<style>
.container-song-carousel {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.container-song-carousel p {
    font-size: 1.5rem;
}

.container-song-carousel button {
    background-color: transparent;
    border: none;
}

i {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease-out;
}

i:hover {
    color: rgba(255, 255, 255, 1);
}
</style>