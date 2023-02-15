require('dotenv').config()

const RPC = require('discord-rpc')
var config = require('../config.json');
const prompts = require("prompt-sync")({ sigint: true });


const rpc = new RPC.Client({
    transport: 'ipc'
});

const ask__Prompts = prompts(`[twitch, youtube, pokemon] Type Here: `);
config.Main = ask__Prompts;
let config__Main = ask__Prompts.toLowerCase();

let detailsA = "none";
let StateA = "I'm Watching"+' '+config.Main+' '+":D"

var varers = [
    "youtube",
    "twitch",
    "pokemon"
]

if (config.Main == varers[0]) {
    let test__ = varers[0].toLowerCase()
    console.log("Watching",test__)
    detailsA = test__
} else if (config.Main == varers[1]){
    let test__ = varers[1].toLowerCase()
    console.log("Watching",test__)
    detailsA = test__
} else if (config.Main == varers[2]){
    let test__ = varers[2].toLowerCase()
    console.log("Watching",test__)
    detailsA = test__
} else {
    console.log("Field Empty")
    detailsA = "nothing";
}
if (config.Main = undefined){
     detailsA = "Watching "+config.Main
     StateA = "config.Main"
}

rpc.on('ready', () => {
    rpc.setActivity({
        details: detailsA,
        state: StateA,
        startTimestamp: new Date(),
        largeImageKey: config__Main,
        largeImageText: "Watching"+' '+config.Main,
        smallImageKey: "Hack",
        smallImageText: "Me :D",
        buttons: [{
            label: "My Github!",
            url: config.Github
        }, {
            label: "My Website!",
            url: config.Website
        }]
    })
    console.log("The Rich Presence is online.")
    console.log("Keep This Bat File Open To Display The RPC")
})

rpc.login(
    {
        clientId: config.ClientID
    }
)