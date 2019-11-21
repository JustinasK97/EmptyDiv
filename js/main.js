const addDivs = document.querySelector('.container');



    for (let i=1; i<=16; i++) {
        const block = document.createElement('div');
        document.body.appendChild(block);
        block.textContent = i;
    }
    function random(number) {
        return Math.floor(Math.random()*number);
    }
    function generate() {
        let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return rndCol;
    }
        let divs = document.querySelectorAll('div');
        for (let i=0; i<divs.length; i++){
            divs[i].onclick = function (e) {
                e.target.style.backgroundColor = generate();
            }
        }
