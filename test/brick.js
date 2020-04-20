const assert = require("assert");
const expect = require("chai").expect;

const brick = require("../src/brick");

describe("Brick", () => {
    it("exists", () => {
        expect(brick).to.exist;
    });

    it("has coordinates", () => {
        expect(brick).to.haveOwnProperty("x", 0, "x coordinate");
        expect(brick).to.haveOwnProperty("y", 0, "y coordinate");
    });

    it("has dimensions", () => {
        expect(brick).to.haveOwnProperty("width", 100);
        expect(brick).to.haveOwnProperty("height", 50);
    });
});