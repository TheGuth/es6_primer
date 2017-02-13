// let and const drill

const arr1 = [11, 12, 23, 35, 58, 93];
const toFind = 35;

for (var i = 0; i < arr1.length; i++) {
    let item = arr1[i];
    if (item === toFind) {
        break;
    }
};

console.log('Found item at position', i);

arr1.push(arr1[arr1.length - 1] + arr1[arr1.length - 2]);

// Arrow functions and defaults drill
const createArray = (items=10) => {
	let arr = [];
	for (let i = 0; i < items; i++) {
		arr.push(i);
	}
	return arr;
}

// function createArray(items) {
//     items = items || 10;
//     let arr = [];
//     for (let i=0; i<items; i++) {
//         arr.push(i);
//     }
//     return arr;
// }

let arr = createArray();

arr = arr.filter(item => item < 40);

// arr = arr.filter(function(item) {
//     return item < 40;
// });

arr = arr.map(item => item * 2);

// arr = arr.map(function(item) {
//     return item * 2;
// });

arr.forEach((item, index) => {
	console.log('Index:', index);
	console.log('item:', item);
});

// arr.forEach(function(item, index) {
//     console.log('Index:', index);
//     console.log('Item:', item);
// });

// Objects drill

const obj1 = {
    foo: 'bar',
    zip: 'zap'
};

const obj2 = {
    alice: 'sender',
    bob: 'receiver',
    eve: 'eavesdropper'
};

const obj3 = {
    satya: 'microsoft',
    tim: 'apple',
    marissa: 'yahoo',
    sundar: 'google',
    mark: 'facebook'
}

const newObj = Object.assign({}, obj1, obj2, obj3);
console.log(newObj);

const deconstrucObj = ({foo, zip, alice, bob, eve, satya, tim, marissa, sundar, mark}) => {
	let newNewObj = {foo, zip, alice, bob, eve, satya, tim, marissa, sundar, mark};
	console.log(newNewObj);
};

deconstrucObj(newObj);

// Array drill

function rectToCorners(x, y, width, height) {
    const topLeft = [x, y];
    const topRight = [x + width, y];
    const bottomLeft = [x, y + height];
    const bottomRight = [x + width, y + height];
    return [].concat(topLeft, topRight, bottomLeft, bottomRight);
};

const position = [10, 20];
const size = [5, 5];

console.log(rectToCorners(...position, ...size));
console.log(rectToCorners(position[0], position[1], size[0], size[1]));









