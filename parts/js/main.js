/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var polyGenus;
(function (polyGenus) {
    class main {
        static main(args) {
            // const pair = [1, 2, 3, 2, 3, 1];
            // const poly = new polyGenus.polygon(6, pair);
            // console.info(poly.genus());
            // const freq = main.getDistribution(6, 1000000);
            // console.log(freq);
        }
        static getDistribution(numSides, trials) {
            const maxGenus = (numSides / 4 | 0);
            const freq = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(maxGenus + 1);
            for (let i = 0; i < trials; i++) {
                {
                    const poly = new polyGenus.polygon(numSides);
                    freq[poly.genus()]++;
                }
                ;
            }
            return freq;
        }
    }
    polyGenus.main = main;
    main["__class"] = "polyGenus.main";
})(polyGenus || (polyGenus = {}));

polyGenus.main.main(null);
