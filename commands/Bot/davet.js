const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("davet")
    .setDescription("Botun davet linklerini gösterir."),

  run: async (client, interaction) => {

    const embed = new EmbedBuilder()
      .setTitle("thestar moderation - İstatistik!")
      .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
      .setImage("https://discord.com/channels/@me/856909511222886401/1223306107259457657")
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Davet Et")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.com/oauth2/authorize?client_id=1223752884466749592&permissions=8&scope=bot"),
        new ButtonBuilder()
          .setLabel("Destek Sunucusu")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/WFHPmGJawM"),
        new ButtonBuilder()
          .setLabel("İnstagram")
          .setStyle(ButtonStyle.Link)
          .setURL("https://www.instagram.com/emin.py/")

      )
    interaction.reply({ embeds: [embed], components: [row] })

  },
};
