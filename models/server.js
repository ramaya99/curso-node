import express from "express";
import cors from "cors";
import { router } from "../routes/user.js";
import "dotenv/config";

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usersPath = "/api/users";

		//Middlewares
		this.middlewares();
		//Rutas de mi app
		this.routes();
	}
	middlewares() {
		//CORS
		this.app.use(cors());

		//Body parser
		this.app.use(express.json());

		//Directorio publico
		this.app.use(express.static("public"));
	}
	routes() {
		this.app.use(this.usersPath, router);
	}

	start() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en puerto", this.port);
		});
	}
}

export { Server };
