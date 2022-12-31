(function () {

    /**
     * 弹性变化
     * 条件: numKeys>=2
     * 
     * @param freq 频率
     * @param decay 衰退比
     * @returns 
     */
    function elastic(freq, decay) {
        if (numKeys < 2) {
            return value;
        }
        let n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n <= 0) {
            return value;
        }
        t = time - key(n).time;
        amp = velocityAtTime(key(n).time - .001);
        w = freq * Math.PI * 2;
        return value + amp * (Math.sin(t * w) / Math.exp(decay * t) / w);
    }

    return {
        elastic
    };
})()
