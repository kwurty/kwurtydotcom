import spotify from '../../images/spotify-generic-hero.png'
import stonks from '../../images/stonks.png'
import namegame from '../../images/name-game.jpg'
import pokedex from '../../images/pokedex.jpg'
import scusa from '../../images/scusa.png'
import chess from '../../images/chess.jpeg'

export const projects = [
    {
        name: "Name Game",
        tools: ["js", "react", "mysql", "tailwindcss"],
        about: "An online party game where you quickly answer the name of a famous person based on the letters in their name. Created with Socket.IO, React, and Express.",
        github: "https://github.com/kwurty/jillcrate-server",
        img: namegame,
    },
    {
        name: "Pokevue",
        tools: ["vuejs", "css"],
        about: "Search and view details on any Pokemon from the franchise. Built with VueJS using the PokeAPI.",
        github: "https://github.com/kwurty/pokedex",
        img: pokedex,
    },
    {
        name: "Artlists",
        tools: ["vuejs", "mysql"],
        about: "Stop organizing your music by songs and start organizing them by the artists. Built with VueJS and MySQL using the Spotify API",
        github: "https://github.com/kwurty/artist-organizer",
        img: spotify,
    },
    {
        name: "Scusa Clay",
        tools: ["wordpress", "php", "tailwindcss", "mysql"],
        about: "Order quality, homemade polymer clay jewelry. Built in WordPress with TailwindCSS.",
        github: "https://scusaclay.com",
        img: scusa,
    },
    {
        name: "Chess Squares",
        tools: ["js", "html", "css"],
        about: "Quickly find the appropriate chess board square in this fast-paced game of memory. Built with vanilla JavaScript.",
        github: "https://github.com/kwurty/chessSquares",
        img: chess,
    },
    {
        name: "Stock Tracker",
        tools: [],
        about: "Monitor the activity on Reddit's /r/PennyStocks subreddit. Append the data to a database and view trends in this app. Made with NodeJS.",
        github: "",
        img: stonks,
    },
]