const ball = {
    x: 0,
    y: 0,
    width: 5,
    height: 5,

    moveLeft(step) {
        this.x -= step;
    },

    moveRight(step) {
        this.x += step;
    },

    moveUp(step) {
        this.y -= step;
    },

    moveDown(step) {
        this.y += step;
    }
};

module.exports = ball;