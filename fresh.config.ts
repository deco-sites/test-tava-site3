import { defineConfig } from "$fresh/server.ts";
import { plugins } from "deco/plugins/deco.ts";
import manifest from "./manifest.gen.ts";
import { mcpServer } from "@deco/mcp";

export default defineConfig({
  plugins: plugins({
    manifest,
    htmx: true,
    useServer: (deco, hono) => {
      // @ts-ignore Trust me, im an engineer
      hono.use("/*", mcpServer(deco));
    },
  }),
});
