(function () {
    /**
     * 弹跳
     * @param c 周期
     * @param h 弹跳高度
     * @param w 弹跳宽度 
     */
    function bounce(c, h, w) {
        let [x, y] = position.value
        let t = time % c - c / 2;
        return [x + time / c * w, y + (Math.pow(2 * t / c, 2) - 1) * h];
    }

    /**
     * 压缩
     * @param c 周期 
     * @param p 比例 
     * @returns 
     */
    function compress(c, p) {
        let w = 100, h = 100;
        let t = time % c - c / 2;
        return [w, h + (1 - Math.pow(2 * t / c, 2)) * 2 * p - p];
    }

    return {
        bounce,
        compress
    };
})()
