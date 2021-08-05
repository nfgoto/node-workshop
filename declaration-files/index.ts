/// <reference path = "./types/AuthTypes.d.ts" />
import auth = require("AuthTypes");

let titi: auth.User;
titi = {
  email: "titi@m.co",
  roles: ['admin']
}

let toto: auth.User;
toto = {
  email: "toto@snow.com",
  roles: ["super_admin"],
  source: "hc"
};