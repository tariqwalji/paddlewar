const assert = require("assert");
const expect = require("chai").expect;

const ball = require("../src/ball");

describe("ball", () => {
    beforeEach(() => {
        ball.x = 0;
        ball.y = 0;
    });

    it("exists", () => {
        assert.equal(typeof ball, "object", "ball is an object");
    });

    it("has coordinates", () => {
        expect(ball).to.have.own.property("x", 0, "x coordinate");
        expect(ball).to.have.own.property("y", 0, "y coordinate");
    });

    it("can move left by 1", () => {
        ball.moveLeft(1);
        assert.equal(ball.x, -1, "ball x to be -1");
    });

    it("can move right by 1", () => {
        ball.moveRight(1);
        assert.equal(ball.x, 1, "ball x to be 1");
    });

    it("can move up by 1", () => {
        ball.moveUp(1);
        assert.equal(ball.y, -1, "ball y to be -1");
    });

    it("can move down by 1", () => {
        ball.moveDown(1);
        assert.equal(ball.y, 1, "ball y to be 1");
    });

    it("has has a dimension of 5x5", () => {
        assert.equal(ball.width, 5, "ball width of 5");
        assert.equal(ball.height, 5, "ball height of 5");
    });
});