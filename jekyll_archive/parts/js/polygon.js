/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var polyGenus;
(function (polyGenus) {
    /**
     * array of integers which represents which sides are glued together
     * preconditions: sidePairings has length numSides, and contains the elements
     * 1, 1, 2, 2, ..., numSides/2, numSides/2 in some order.
     * two edges are glued together if the elements at the corresponding
     * indices in the sidePairings array are the same
     * for instance, the array [1, 2, 1, 2] represents the gluing of the 4-gon where the first and
     * third edges, and second and fourth edges, are glued together. This is a torus.
     * from our work in the paper, the sidePairings array describes a complete grouping of the
     * n-gon, and therefore describes all of the relevant information for an orientable gluing.
     * @param {number} n
     * @param {int[]} s
     * @class
     */
    class polygon {
        constructor(n, s) {
            if (((typeof n === 'number') || n === null) && ((s != null && s instanceof Array && (s.length == 0 || s[0] == null || (typeof s[0] === 'number'))) || s === null)) {
                let __args = arguments;
                if (this.numSides === undefined) {
                    this.numSides = 0;
                }
                if (this.sidePairings === undefined) {
                    this.sidePairings = null;
                }
                this.numSides = n;
                this.sidePairings = s;
            }
            else if (((typeof n === 'number') || n === null) && s === undefined) {
                let __args = arguments;
                if (this.numSides === undefined) {
                    this.numSides = 0;
                }
                if (this.sidePairings === undefined) {
                    this.sidePairings = null;
                }
                this.randomPolygon(n);
            }
            else
                throw new Error('invalid overload');
        }
        randomPolygon(n) {
            this.numSides = n;
            const sideArray = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(n);
            const sidesLeft = ([]);
            for (let i = (n / 2 | 0); i > 0; i--) {
                {
                    /* add */ (sidesLeft.push(i) > 0);
                    /* add */ (sidesLeft.push(i) > 0);
                }
                ;
            }
            for (let i = 0; i < n; i++) {
                {
                    const index = ((Math.random() * (n - i)) | 0);
                    sideArray[i] = /* get */ sidesLeft[index];
                    /* remove */ sidesLeft.splice(index, 1)[0];
                }
                ;
            }
            this.sidePairings = sideArray;
        }
        print() {
            for (let i = 0; i < this.numSides; i++) {
                {
                    console.info(this.sidePairings[i] + " ");
                }
                ;
            }
            console.info();
        }
        genus() {
            let total = 0;
            while ((this.reduceCrossPairs())) {
                total++;
            }
            ;
            return total;
        }
        /*private*/ reduceCrossPairs() {
            let currIdx = 0;
            while ((currIdx < this.numSides)) {
                {
                    let currPair = currIdx + 1;
                    while ((currPair < this.numSides)) {
                        {
                            if (this.sidePairings[currIdx] === this.sidePairings[currPair])
                                break;
                            currPair++;
                        }
                    }
                    ;
                    if (currPair === this.numSides) {
                        currIdx += 1;
                        continue;
                    }
                    const pairTwo = this.searchForSingle(currIdx, currPair);
                    if (pairTwo === -1) {
                        currIdx += 1;
                    }
                    else {
                        const indexTwo = this.findPair(pairTwo);
                        this.updatePolygon(currIdx, currPair, pairTwo, indexTwo);
                        return true;
                    }
                }
            }
            ;
            return false;
        }
        /*private*/ searchForSingle(start, finish) {
            const tempData = (s => { let a = []; while (s-- > 0)
                a.push(false); return a; })(finish - start + 1);
            for (let i = 0; i < tempData.length; i++) {
                {
                    if (!tempData[i]) {
                        let hasPair = false;
                        for (let j = i + 1; j < tempData.length; j++) {
                            {
                                if (this.sidePairings[j + start] === this.sidePairings[i + start]) {
                                    tempData[j] = true;
                                    tempData[i] = true;
                                    hasPair = true;
                                    break;
                                }
                            }
                            ;
                        }
                        if (!hasPair)
                            return i + start;
                    }
                }
                ;
            }
            return -1;
        }
        /*private*/ findPair(idx) {
            for (let i = 0; i < this.numSides; i++) {
                {
                    if (this.sidePairings[i] === this.sidePairings[idx] && i !== idx)
                        return i;
                }
                ;
            }
            return -1;
        }
        /*private*/ updatePolygon(idx00, idx01, idx10, idx11) {
            const arr = (s => { let a = []; while (s-- > 0)
                a.push(0); return a; })(this.numSides - 4);
            let idx1 = 0;
            let idx2 = idx00 + 1;
            while ((idx2 < idx10)) {
                {
                    arr[idx1] = this.sidePairings[idx2];
                    idx2++;
                    idx1++;
                }
            }
            ;
            idx2 = idx11 + 1;
            while ((idx2 < this.numSides + idx00)) {
                {
                    if (idx2 >= this.numSides) {
                        arr[idx1] = this.sidePairings[idx2 - this.numSides];
                    }
                    else
                        arr[idx1] = this.sidePairings[idx2];
                    idx2++;
                    idx1++;
                }
            }
            ;
            idx2 = idx01 + 1;
            while ((idx2 < idx11)) {
                {
                    arr[idx1] = this.sidePairings[idx2];
                    idx2++;
                    idx1++;
                }
            }
            ;
            idx2 = idx10 + 1;
            while ((idx2 < idx01)) {
                {
                    arr[idx1] = this.sidePairings[idx2];
                    idx2++;
                    idx1++;
                }
            }
            ;
            this.numSides -= 4;
            this.sidePairings = arr;
        }
    }
    polyGenus.polygon = polygon;
    polygon["__class"] = "polyGenus.polygon";
})(polyGenus || (polyGenus = {}));
