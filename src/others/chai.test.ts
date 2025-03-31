import { describe, assert, expect, it } from "vitest";

function sayHello(name: string): string {
     return `Hello ${name}`
}

describe('sayHello', () => {
     it('should return with name', () => {
          expect(sayHello('hello')).to.be.a('string');
          assert.equal(sayHello('Sehan'), 'Hello Sehan');
     });

     it('should handle empty string input', () => {
          expect(sayHello('')).to.be.a('string');
          assert.equal(sayHello(''), 'Hello ');
     });

     it('should handle null input', () => {
          expect(sayHello(null as any)).to.be.a('string');
          assert.equal(sayHello(null as any), 'Hello null');
     });

     it('should handle undefined input', () => {
          expect(sayHello(undefined as any)).to.be.a('string');
          assert.equal(sayHello(undefined as any), 'Hello undefined');
     });
});
