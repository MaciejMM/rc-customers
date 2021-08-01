const express = require("express");

class CommonRoutesSettings {

  constructor(name) {
    this.express = express;
    this.name = name;
  }
}

module.exports = CommonRoutesSettings;
