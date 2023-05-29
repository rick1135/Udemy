const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let x in nums) {
    if(x == 5) {
        break;
    }
    console.log(`${x}o number = ${nums[x]}`);
}

console.log('----------------------------------');

for(let y in nums) {
    if(y == 5) {
        console.log('----------------------------------');
        console.log('5 found!');
        console.log('----------------------------------');
        continue;
    }
    console.log(`${y}o number = ${nums[y]}`);
}

external: for(let a in nums) {
    for(let b in nums) {
        if(a == 2 && b == 3) {
            break external;
        }
        console.log(`Par = ${a}, ${b}`);
    }
}