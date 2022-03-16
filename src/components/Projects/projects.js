import spotify from '../../images/artlists.png'
import stonks from '../../images/stonks.png'
import namegame from '../../images/name-game.png'
import pokedex from '../../images/pokedex.png'
import kwitter from '../../images/kwitter.png'
import scusa from '../../images/scusa.png'
import chess from '../../images/chess.jpeg'

export const projects = [
    {
        name: "Name Game",
        tools: ["devicon-javascript-plain", "devicon-react-original", "devicon-mysql-plain", "devicon-tailwindcss-original-wordmark"],
        about: "An online party game where you quickly answer the name of a famous person based on the letters in their name.",
        learned: "This was my first major project using ReactJS. I decided to try and recreate an old party game I used to play in college. As this was also my first time using Socket.IO, I had a lot to learn. Ultimately, this project helped me understand web sockets, the power of React hooks, and some of th ",
        github: ["https://github.com/kwurty/jillcrate-server", 'https://github.com/kwurty/jillcrate-client'],
        view: "https://namegame.kwurty.com/",
        img: namegame,
    },
    {
        name: "Artlists",
        tools: ["devicon-vuejs-plain", "devicon-mongodb-plain"],
        about: "Stop organizing your music by songs and start organizing them by the artists.",
        learned: "After doing a course in VueJS, this was my first attempt at creating a functional application. This project was my first dive into oAuth and session based logins. It was fun to learn the different methods of authentication and having to develop my own hashing and JWT creation. This was also my first app to use MongoDB, which was definitely a change from using mainly MySQL most of my life.",
        github: "https://github.com/kwurty/artist-organizer",
        view: "https://artlists.kwurty.com",
        img: spotify,
    },
    {
        name: "Kwitter",
        tools: ["devicon-react-original", "devicon-postgresql-plain", "devicon-python-plain"],
        about: "Sick of Twitter? Try Kwitter. It's basically the same thing.",
        learned: "I started learning Python in order to expand my programming horizons. I thought doing only JavaScript would limit me in my path and understanding of programming in general. So I decided to do a simple REST API with Python. After I completed that, I said screw that and did a front end in something I was comfortable with. I will continue to learn Python, but I think this was a great introduction into the power and features of Python for web use.",
        github: "https://github.com/kwurty/artist-organizer",
        view: "https://kwitter.kwurty.com",
        img: kwitter,
    },
    {
        name: "Pokevue",
        tools: ["devicon-vuejs-plain", "devicon-css3-plain"],
        about: "Search and view details on any Pokemon from the franchise.",
        learned: "This program was created when I was exploring REST APIs and the functionality. Doing this project helped me understand VueJS better as well as how promises work in Javascript.",
        github: "https://github.com/kwurty/pokedex",
        view: "https://kwurty.github.io/pokedex/",
        img: pokedex,
    },
    // {
    //     name: "Scusa Clay",
    //     tools: ["wordpress", "php", "tailwindcss", "mysql"],
    //     about: "Order quality, homemade polymer clay jewelry. Built in WordPress with TailwindCSS.",
    //     github: "https://scusaclay.com",
    //     img: scusa,
    //     inProduction: true
    // },
    // {
    //     name: "Chess Squares",
    //     tools: ["js", "html", "css"],
    //     about: "Quickly find the appropriate chess board square in this fast-paced game of memory. Built with vanilla JavaScript.",
    //     github: "https://github.com/kwurty/chessSquares",
    //     img: chess
    // },
    // {
    //     name: "Stock Tracker",
    //     tools: [],
    //     about: "Monitor the activity on Reddit's /r/PennyStocks subreddit. Append the data to a database and view trends in this app. Made with NodeJS.",
    //     github: "",
    //     img: stonks,
    //     inProduction: true
    // },
]