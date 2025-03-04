import { Hono } from "hono";

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next();
  } else {
    return c.text("You dont have access");
  }
});

app.get("/", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.json({ msg: "Private endpoint working" });
});

export default app;
