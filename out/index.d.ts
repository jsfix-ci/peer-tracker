// Generated by typings
// Source: Server.d.ts
declare module '~peer-tracker/Server' {
import Server = require('~peer-tracker/Server');

export = Server;
}
declare module 'peer-tracker/Server' {
import main = require('~peer-tracker/Server');
export = main;
}

// Generated by typings
// Source: Client.d.ts
declare module '~peer-tracker/Client' {
import Client = require('~peer-tracker/Client');

export = Client;
}
declare module 'peer-tracker/Client' {
import main = require('~peer-tracker/Client');
export = main;
}

// Generated by typings
// Source: peer-tracker.d.ts
declare module 'peer-tracker' {
import Server = require('~peer-tracker/Server');
import Client = require('~peer-tracker/Client');

export { Client, Server }
export default Server;
}
