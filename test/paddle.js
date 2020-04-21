const assert = require("assert");
const expect = require("chai").expect;

const paddle = require("../src/paddle");

describe("paddle", () => {
    beforeEach(() => {
        paddle.x = 0;
        paddle.y = 0;
    });

    it("exists", () => {
        expect(paddle).to.exist;
    });

    it("has coordinates", () => {
        expect(paddle).to.haveOwnProperty("x");
        expect(paddle).to.haveOwnProperty("y");
    });

    it("has dimensions", () => {
        expect(paddle).to.haveOwnProperty("width");
        expect(paddle).to.haveOwnProperty("height");
    });

    it("can move left by 1", () => {
        paddle.moveLeft(1);
        assert.equal(paddle.x, -1);
    });

    it("can move right by 1", () => {
        paddle.moveRight(1);
        assert.equal(paddle.y, 1);
    });
});