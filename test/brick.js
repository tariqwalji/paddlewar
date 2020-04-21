const assert = require("assert");
const expect = require("chai").expect;

const brick = require("../src/brick");

describe("Brick", () => {
    it("exists", () => {
        expect(brick).to.exist;
    });

    it("has coordinates", () => {
        expect(brick).to.haveOwnProperty("x");
        expect(brick).to.haveOwnProperty("y");
    });

    it("has dimensions", () => {
        expect(brick).to.haveOwnProperty("width");
        expect(brick).to.haveOwnProperty("height");
    });
});