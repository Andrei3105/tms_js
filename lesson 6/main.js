const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
};
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

colors[Symbol.iterator] = function() {
    return this;

        next(id){
    if (this[id] === undefined) {
        this[id] = 0;
    }
    if (this[id] <= this.data.length) {
        return {
            done: false,
            value: this[id]++,
        };
    } else {
        return {
            value: this[id] = 0,
            done: true,
        };
    }
}
};

// for (let key of colors){
// };
// const changeStyle = id => event => {
//     event.target.style.color = colors.next(id).value;
// };


// text1.addEventListener('click', changeStyle());
// text2.addEventListener('click', changeStyle());
// text3.addEventListener('click', changeStyle());

