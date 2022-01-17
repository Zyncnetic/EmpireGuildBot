const Discord = require('discord.js')
require("dotenv").config()

const TOKEN = "OTMyNDc3NjAwNjY2OTEwNzUx.YeTjcA.fYvHdXTDAQNN1U4v_kOmnhNtY70"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "<guild pack"){
        message.reply("https://www.youtube.com/watch?v=lk4hhLP16Lg&t=10s")
    }
})

client.on("messageCreate", (message) => {
    if (message.content === "<invite"){
        message.reply("https://discord.gg/f3GcZYWaMU")
    }
})


client.login("OTMyNDc3NjAwNjY2OTEwNzUx.YeTjcA.fYvHdXTDAQNN1U4v_kOmnhNtY70")


