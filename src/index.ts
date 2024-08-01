import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Cloudflare workers");
});

export default app;
