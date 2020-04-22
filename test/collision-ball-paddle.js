const assert = require("assert");
const expect = require("chai").expect;

const ball = require("../src/ball");
const paddle = require("../src/paddle");

describe("collision: ball and paddle", () => {
    it("collides if ball touches top of paddle", () => {
        paddle.width = 10;
        paddle.height = 2;

        ball.width = 5;
        ball.height = 5;

        paddle.x = 50;
        paddle.y = 100;
        ball.x = 50;
        ball.y = 96;

        assert.equal(ball.collidedWith(paddle), true);
    });

    it("does not collide when the ball does not touch the paddle", () => {
        paddle.width = 10;
        paddle.height = 2;

        ball.width = 5;
        ball.height = 5;

        paddle.x = 50;
        paddle.y = 100;
        ball.x = 50;
        ball.y = 95;
        
        assert.equal(ball.collidedWith(paddle), false);
    });
});