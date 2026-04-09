const { getDefaultConfig } = require("expo/metro");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
