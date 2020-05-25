import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { getUserGithub } from "./controllers/getUserGithub.ts";
import { getUserGithubId } from "./controllers/getUserGithubId.ts";

const app = new Application();
const router = new Router();

router.get("/api", getUserGithub);
router.get("/api/:username", getUserGithubId);

app.use(router.routes());

console.log('App Running in -> http://localhost:3000');

await app.listen({ port: 3000 });