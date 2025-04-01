import { describe, expect, it, vi } from "vitest";

describe('mocking', () => {
     function sayHello(name: string, callback: (message: string) => void) {
          callback("Hello " + name)
     }   
     
     it('should support moclose', () => {
          const callback = vi.fn();
          sayHello("Sehan" ,callback);
          
          expect(callback).toHaveBeenCalled();
          expect(callback).toHaveBeenCalledWith("Hello Sehan");  
     });
})