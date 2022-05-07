import { BaseCommandInteraction, Client, Constants } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { Command } from "../command";

export const React: Command = {
  name: "react",
  description: "Returns the corresponding emoji",

  options: [
    {
      name: "emoji",
      description: "Choose from the list of emoji options",
      required: true,
      type: ApplicationCommandOptionTypes.STRING,
    },
  ],

  run: async (client: Client, interaction: BaseCommandInteraction) => {
    let content = "Please select a valid emoji from the available options";

    const selected = interaction.options.get("emoji")?.value;

    if (selected === "happy") {
      content = "😄";
    } else if (selected === "sad") {
      content = "😔";
    } else if (selected === "angry") {
      content = "😠";
    } else if (selected === "wink") {
      content = "😉";
    } else if (selected === "thinking") {
      content = "🤔";
    }

    if (interaction.channelId !== "964428440675684395") {
      content =
        "This command can only be used in the 'react' channel of the not engsoc server";
    }
    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
