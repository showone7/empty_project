import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as chalk from "chalk";
import * as React from "react";
import { Helmet } from "react-helmet";
import * as ReactDOMServer from "react-dom/server";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import { StaticRouter } from "react-router-dom";
import App from "../components/App";
import { customTheme } from "../theme";
import { renderIndexHtml } from "./renderIndexHtml";
import * as http from "http";


const port = parseInt(process.env.PORT || "3000", 10);
const host = process.env.HOST || "localhost";



const app = express();
const server = http.createServer(app);


server.listen(port, () => {
    console.log(
        `Serving at http://${host}:${port} ${chalk.green("✓")}. ${chalk.red("To run in dev mode: npm run dev")}`
    );
});
