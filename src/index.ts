import { Client, Intents } from "discord.js";
import "dotenv/config";
import interactions from "./listeners/interactions";
import ready from "./listeners/startup";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

ready(client);
interactions(client);

client.login(process.env.TOKEN);
