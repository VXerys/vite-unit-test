import { describe, expect, it } from "vitest";
import { sayHello } from "../say-hello";

describe('Say Hello', () => {
     it('should return with name', () => {
          const result = sayHello('Sehan');
          expect(result).toBe('Hello Sehan');
     });
})