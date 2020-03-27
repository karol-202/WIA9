function rand() {
    return Math.floor(100 * Math.random());
}

function test1D(...fillers) {
    const array = new Array(20);
    fillers.forEach(filler => filler(array));
    const body = document.getElementById('body');
    array.forEach(e => {
        const node = document.createElement('div');
        node.innerHTML = e;
        body.append(node);
    });
}

function testDisplay1D(displayer) {
    const array = new Array(20);
    _a(array);
    displayer(array);
}

function oa(array) {
    for(i = 0; i < 20; i++) {
        array[i] = rand();
    }
}

function ob(array) {
    for(i = 0; i < 20; i++) {
        array[i] = 0;
    }
}

function oc(array) {
    for(i = 0; i < 20; i+=2) {
        array[i] = 0;
    }
}

function od(n) {
    return function (array) {
        for(i = 0; i < 20; i+=n) {
            array[i] = 0;
        }
    };
}

function oe(start, end) {
    return function (array) {
        for(i = start; i <= end; i++) {
            array[i] = 0;
        }
    };
}

function of(x) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            if(array[i] > x) array[i] = 0;
        }
    };
}

function og(...values) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            if(values.includes(array[i])) array[i] = 0;
        }
    };
}

function oh(array) {
    const body = document.getElementById('body');
    array.forEach(e => {
        const node = document.createElement('div');
        node.innerHTML = e;
        body.append(node);
    });
}

function oi(array) {
    const string = array.reduce((acc, cur) => acc + ' ' + cur, '');

    const body = document.getElementById('body');
    body.innerHTML = string;
}

function oj(seprator) {
    return function (array) {
        const string = array.reduce((acc, cur, index) => index !== 0 ? acc + seprator + cur : cur, '');

        const body = document.getElementById('body');
        body.innerHTML = string;
    }
}

function ok(start) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            array[i] = start + i;
        }
    }
}

function ol(start) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            array[i] = start - i;
        }
    }
}

function test2D(...fillers) {
    const array = new Array(20);
    for(i = 0; i < 20; i++) {
        array[i] = new Array(20);
        for(j = 0; j < 20; j++) {
            array[i][j] = 0;
        }
    }
    fillers.forEach(filler => filler(array));
    const body = document.getElementById('body');
    array.forEach(row => {
        const node = document.createElement('div');
        const string = row.reduce((acc, cur) => acc + ' ' + cur);
        node.innerHTML = string;
        body.append(node);
    });
}

function ma(col) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            array[i][col] = rand();
        }
    }
}

function mb(row) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            array[row][i] = rand();
        }
    }
}

function mc(col, row, value) {
    return function (array) {
        array[row][col] = value;
    }
}

function md(src) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            for(j = 0; j < 20; j++) {
                array[i][j] = src[i][j];
            }
        }
    }
}

function me(src) {
    return function (array) {
        for(i = 0; i < 20; i++) {
            for(j = 0; j < 20; j++) {
                array[i][j] = src[j][i];
            }
        }
    }
}

function mf(array) {
    for(i = 0; i < 20; i++) {
        for(j = 0; j < 20; j++) {
            const hor = i >= 10;
            const ver = j >= 10;
            const border = i <= 1 || i >= 18 || j <= 1 || j >= 18;
            const fill = hor ^ ver ^ border;
            array[i][j] = fill ? '1' : '0';
        }
    }
}

function mg(array) {
    for(i = 0; i < 20; i++) {
        const size = i / 2;
        for(j = 0; j < 20; j++) {
            const fill = Math.abs(9 - j) <= size;
            array[i][j] = fill ? '1' : '0';
        }
    }
}
