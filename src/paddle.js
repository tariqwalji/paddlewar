const paddle = {
    x: 0, y: 0, width: 0, height: 0,

    moveLeft(step) {
        this.x -= step;
    },

    moveRight(step) {
        this.y = step;
    }
};

module.exports = paddle;