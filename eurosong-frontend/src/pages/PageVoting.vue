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

        <div class="container-points">
            <button v-for="(button, index) in buttons" :key="index" class="add-2-points" @click="addVote(index)" :disabled="button.disabled">
                +{{button.amountOfPoints}}
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
            addVote(index) {
                fetch("http://localhost:3000/votes", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        points: this.buttons[index].amountOfPoints,
                        voter_id: 3,
                        song_id: this.songs[this.currSong].song_id,
                    })
                })
                .then((data) => {
                    return data.json();
                })
                .then((data) => {
                    console.log(data);
                    this.buttons[index].disabled = true;

                    let amountOfButtonsEnabled = this.buttons.filter((button) => button.disabled === false).length;

                    if (amountOfButtonsEnabled === 0) {
                        // console.log("Redirect to ranking")
                        this.$emit("setActivePage", "Ranking");
                    }
                }) 
            },

            nextSong() {
                if (this.currSong < this.songs.length - 1) {
                    this.currSong++;
                    // console.log(this.currSong)
                }

                else {
                    this.currSong = 0;
                }
            },

            prevSong() {
                if (this.currSong > 0) {
                    this.currSong--;
                    // console.log(this.currSong)
                }

                else {
                    this.currSong = this.songs.length - 1;
                }
            }
        },

        data() {
            return {
                songs: [],
                currSong: 0,
                buttons: [
                    {
                        amountOfPoints: 2,
                        disabled: false
                    },
                    {
                        amountOfPoints: 4,
                        disabled: false
                    },
                    {
                        amountOfPoints: 8,
                        disabled: false
                    }
                ]
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

.container-points {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
}

.container-points button {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    border-radius: 5px;
    padding: 5px;
    transition: border 0.3s ease-out;
}
 
.container-points button:hover {
    border: 1px solid rgba(255, 255, 255, 1);
}

.container-points button {
    cursor: pointer;
}
</style>