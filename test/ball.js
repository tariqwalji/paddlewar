const assert = require("assert");
const expect = require("chai").expect;

const ball = require("../src/ball");

describe("ball", () => {
    beforeEach(() => {
        ball.x = 0;
        ball.y = 0;
    });

    it("exists", () => {
        expect(ball).to.exist;
    });

    it("has coordinates", () => {
        expect(ball).to.have.own.property("x");
        expect(ball).to.have.own.property("y");
    });

    it("has dimensions", () => {
        expect(ball).to.haveOwnProperty("width");
        expect(ball).to.haveOwnProperty("height");
    });

    it("can move left by 1", () => {
        ball.moveLeft(1);
        assert.equal(ball.x, -1);
    });

    it("can move right by 1", () => {
        ball.moveRight(1);
        assert.equal(ball.x, 1);
    });

    it("can move up by 1", () => {
        ball.moveUp(1);
        assert.equal(ball.y, -1);
    });

    it("can move down by 1", () => {
        ball.moveDown(1);
        assert.equal(ball.y, 1);
    });

    it("can move left by 5", () => {
        ball.moveLeft(5);
        assert.equal(ball.x, -5);
    });

    it("can move right by 5", () => {
        ball.moveRight(5);
        assert.equal(ball.x, 5);
    });

    it("can move up by 5", () => {
        ball.moveUp(5);
        assert.equal(ball.y, -5);
    });

    it("can move down by 5", () => {
        ball.moveDown(5);
        assert.equal(ball.y, 5);
    });
});