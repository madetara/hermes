import app from "./App";

const port = process.env.PORT || 80;

app.listen(port, () => {
    return console.log(`listening on ${port}`);
});
