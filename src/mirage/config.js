import { Server, Model } from "miragejs";
import users from "./db.json";

export default function () {
  const server = new Server({
    models: {
      user: Model
    },
    fixtures: {
      users
    },

    seeds(server) {
      // db.users.forEach((user) => {
            //create("user", user);
      // });
      server.loadFixtures('users')
    },

    routes() {
      this.namespace = "/api";

      this.get("/users", ({db}) => {
        return db.users;
      });
      
      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
    }
  });

  return server;
}
