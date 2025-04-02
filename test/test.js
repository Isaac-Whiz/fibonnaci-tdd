// Lorna Naula & Ssekajja Wavamuno Isaac
import { describe, it } from "mocha";
import { assert } from "chai";
import fibonacci from "../fibonacci.js";

describe("Fibonacci function tests for valid integers", () => {
  it("Should return 0 for fibonacci(0)", () => {
    assert.equal(fibonacci(0), 0);
  });
  it("Should return 1 for fibonacci(1)", () => {
    assert.equal(fibonacci(1), 1);
  });
  it("Should return 55 for fibonacci(10)", () => {
    assert.equal(fibonacci(10), 55);
  });
});
