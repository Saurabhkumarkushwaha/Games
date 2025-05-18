window.addEventListener('touchstart', e => {
    this.touchY = e.changedTouches[0].pageY;
});
window.addEventListener('touchmove', e => {
    const swipeDistance = e.changedTouches[0].pageY - this.touchY;
    if (swipeDistance < -this.touchTreshold && this.keys.indexOf('swipe up') === -1) this.keys.push('swipe up');
    else if(swipeDistance > this.touchTreshold && this.keys.indexOf('swipe down') === -1) {
        this.keys.push('swipe down');
        if (gameOver) restartGame();
    }
});
window.addEventListener('touchend', e => {
    this.keys.splice(this.keys.indexOf('swipe up'), 1);
    this.keys.splice(this.keys.indexOf('swipe down'), 1);
});