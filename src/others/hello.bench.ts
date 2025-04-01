import { bench, describe, expect} from "vitest"

describe("Benchmarking" , () => {
     function sayHello(name: string): string {
          return `Hello ${name}`
     }
     bench("sayHello", () => {
          const result = sayHello("Sehan");
          expect(result).toBe("Hello Sehan");
     });
})