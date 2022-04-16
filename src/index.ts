import { Client, Intents } from "discord.js";
import "dotenv/config";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);
