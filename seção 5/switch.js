const showRes = function (note){
    switch (Math.floor(note)) {
        case 10: case 9: case 8: case 7:
            console.log("Honor Board!");
            break;
        case 6: case 5: case 4:
            console.log("Recovery!");
            break;
        case 3: case 2: case 1: case 0:
            console.log("Disapproved!");
            break;
        default:
            console.log("Invalid note!");
    }
    
    console.log("End!");
}

showRes(10);
showRes(8.9);
showRes(6.55);
showRes(2.3);
showRes(-1);
showRes(11);