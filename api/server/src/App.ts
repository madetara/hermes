import * as fastify from "fastify";

class App {
    public app: fastify.FastifyInstance;

    constructor() {
        this.app = fastify.default({
            logger: true
        });
        this.mountRoutes();
    }

    private mountRoutes(): void {
        this.app.get("/", async (_, res) => {
            res.send("Hello, world!");
        });
    }
}

export default new App().app;
