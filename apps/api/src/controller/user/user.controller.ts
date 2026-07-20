import { Context, Hono } from "hono";

import type { AppContext } from "../../context";

const UserController = new Hono<AppContext>()
  .get("/profile", (c) => {
    const user = c.get("user");
    return c.json(user);
  })
  .get("/oauth-accounts", async (c) => {
    const oauthAccounts = await c.get("db").query.oauthAccounts.findMany({
      where: (u, { eq }) => eq(u.userId, c.get("user")?.id ?? ""),
    });
    return c.json({
      accounts: oauthAccounts.map((oa) => ({
        provider: oa.provider,
      })),
    });
  });

const fetchRefreshToken = async (c: Context<AppContext>, id: string) => {
  return c
    .get("db")
    .query.users.findFirst({
      where: (u, { eq }) => eq(u.id, id),
    })
    .then((user) => user?.refreshToken);
};

export { UserController, fetchRefreshToken };
