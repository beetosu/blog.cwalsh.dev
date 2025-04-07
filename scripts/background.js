for (let backgroundIdx = 1; backgroundIdx < 6; backgroundIdx++) {
    const seed = Math.floor(Math.random() * 10);
    let backgroundId = `background${backgroundIdx}`;

    const fnSetClassnameToActive = () => document.getElementById(backgroundId).className = 'active';

    /**
     * Depending on the seed, do the following:
     * If 9, instantly start active loop.
     * If 8 or 7, start a "mid active" loop, and set timer to start active loop immedaitely afterwards.
     * Everything else set timer to start an active loop anywhere between 1 to 100 seconds.
     */
    if (seed > 6) {
        if (seed > 7) {
            if (seed > 8) {
                fnSetClassnameToActive();
            } else {
                document.getElementById(backgroundId).className =  'mid-active-1';
                setTimeout(fnSetClassnameToActive, 63500);
            }
        } else {
            document.getElementById(backgroundId).className =  'mid-active-2';
            setTimeout(fnSetClassnameToActive, 34500);
        }
    } else {
        setTimeout(fnSetClassnameToActive, Math.floor(Math.random() * 25000));
    }
}