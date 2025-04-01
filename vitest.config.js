import { defineConfig } from "vitest/config";

export default defineConfig({
     
     test: {
          dir: "src",
          globals: true,
          coverage: {
               provider: "istanbul"
          }
     }
})