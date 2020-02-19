import app from "./App";

const port: number = Number(process.env.PORT) || 80;

const start = async () => {
    try {
        await app.listen(port);
        app.log.info(`listening on port ${port}`);
    } catch (err) {
        app.log.fatal(err);
        process.exit(1);
    }
};

start();
