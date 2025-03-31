import { describe, expect, it } from "vitest";

describe("slow test", () => {
     // concurrent hanya untuk mempercepat output test nya saja
     it.concurrent("should pass", async () => {
          await new Promise(resolve => setTimeout(resolve, 3000));
          expect(1).toBe(1);
     });
     it.concurrent("should pass", async () => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          expect(1).toBe(1);
     });
     it.concurrent("should pass", async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          expect(1).toBe(1);
     });
     
});