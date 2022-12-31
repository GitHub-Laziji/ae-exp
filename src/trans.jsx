(function () {

    function validate(v, type, def) {
        return typeof v === type ? v : def;
    }

    /**
     * 弹性变化
     * 条件: 关键帧数>=2
     * 类型: 通用
     * 
     * @param freq 次数
     * @param decay 衰退比
     * @returns 
     */
    function elastic(freq, decay) {
        freq = validate(freq, 'number', 6);
        decay = validate(decay, 'number', 4);

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
        let t = time - key(n).time;
        let amp = velocityAtTime(key(n).time - .001);
        let w = freq * Math.PI * 2;
        return value + amp * (Math.sin(t * w) / Math.exp(decay * t) / w);
    }

    /**
     * 重力反弹
     * 条件: 关键帧数==2
     * 类型: 位置
     * 
     * @param e 弹力 
     * @param g 重力 
     * @param freq 次数 
     * @returns 
     */
    function gravityRebound(e, g, freq) {
        e = validate(e, 'number', 0.7);
        g = validate(g, 'number', 1000);
        freq = validate(freq, 'number', 9);

        if (numKeys != 2) {
            return value;
        }
        let n = nearestKey(time).index;
        if (key(n).time > time) {
            n--;
        }
        if (n <= 0) {
            return value;
        }
        let t = time - key(n).time;
        let v = -velocityAtTime(key(n).time - .001) * e;
        let vl = length(v);
        let vu = 0;
        if (value instanceof Array) {
            vu = (vl > 0) ? normalize(v) : [0, 0, 0];
        } else {
            vu = (v < 0) ? -1 : 1;
        }
        let tCur = 0;
        let segDur = 2 * vl / g;
        let tNext = segDur; nb = 1;
        while (tNext < t && nb <= freq) {
            vl *= e; segDur *= e;
            tCur = tNext;
            tNext += segDur;
            nb++
        }
        if (nb > freq) {
            return value
        }
        let delta = t - tCur;
        return value + vu * delta * (vl - g * delta / 2);
    }

    return {
        elastic,
        gravityRebound
    };
})()
