
// const mongoose = require('mongoose');
// const config = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {

        console.log(`${client.user.username} is now online.`);
    },
};