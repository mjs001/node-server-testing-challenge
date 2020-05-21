const express = require("express");

const server = express();
server.use(express.json());

const data = {
  Welcome: {
    welcome:
      "This website will provide you with animal crossing new horizons top ten lists",
  },
  Villagers: {
    Raymond: "The top villager",
  },
};

const result = Object.entries(data).reduce((result, [key, value]) => {
  key = key
    .replace(/([A-Z]|\d+)/g, " $1")
    .replace(/^(.)/, (unused, p1) => p1.toUpperCase());
  if (!["string", "number", "boolean"].includes(typeof value)) {
    value = Object.entries(value)
      .map(([key, value]) =>
        typeof value == "boolean" ? (value ? key : undefined) : value
      )
      .filter((v) => v !== undefined)
      .join(",");
  }
  result.push(`${key}: ${value}`);
  return result;
}, []);
console.log(result.join("\n"));

server.get("/", (req, res) => {
  res.status(200).json(result.data.Welcome);
});
