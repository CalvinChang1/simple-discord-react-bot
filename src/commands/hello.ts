import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Hello: Command = {
  name: "happy",
  description: "Returns a greeting",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "😄";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
