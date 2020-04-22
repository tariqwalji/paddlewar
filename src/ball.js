const ball = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
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
    },

    collidedWith(collisionObject) {
        return (collisionObject.x <= this.x + this.width && collisionObject.x + collisionObject.width >= this.x &&
               collisionObject.y <= this.y + this.height && collisionObject.y + collisionObject.height >= this.y) 
               || 
               (this.x <= collisionObject.x + collisionObject.width && this.x + this.width >= collisionObject.x &&
                this.y <= collisionObject.y + collisionObject.height && this.y + this.height >= collisionObject.y);
    }
};

module.exports = ball;