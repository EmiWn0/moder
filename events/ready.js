const { ActivityType, Events } = require("discord.js")
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    let activities = [`♆ S A N D E S ♆`, `♆ E M İ W N ♆`], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
  }
};