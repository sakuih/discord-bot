const Discord = require('discord.js')
const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()
const client = new Discord.Client(
    {intents: [
      GatewayIntentBits.Guilds,
		  GatewayIntentBits.GuildMessages,
		  GatewayIntentBits.MessageContent,
    ] })

client.on('message',  (message) => {
    if (message.content === '!ping'){
      message.channel.send('Pong')
    }
})

client.login(process.env.DISCRD_TOKEN)
