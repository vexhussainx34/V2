const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("chud")==0 || event.body.indexOf("bal")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("tore cudi")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("bainchud")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchud")==0 || event.body.indexOf("abal")==0 || event.body.indexOf("gala gali")==0) {
		var msg = {
				body: "(Oyyy🦆💨 Gali dile latti diye ber kore demu😒😾)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
