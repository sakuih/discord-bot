const Discord = require('discord.js')
const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()
const client = new Discord.Client(
    {intents: [
      GatewayIntentBits.Guilds,
		  GatewayIntentBits.GuildMessages,
		  GatewayIntentBits.MessageContent,
    ] })

client.once('ready', () => {
  console.log("ready")
})

client.login(process.env.DISCRD_TOKEN)
