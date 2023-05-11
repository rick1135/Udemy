Number.prototype.between = function (start, end) {
    return this >= start && this <= end;
}

const showRes = function (note){
    if (note.between(9, 10)) {
        console.log("Honor Board!");
    } else if (note.between(7, 8.99)) {
        console.log("Approved!");
    } else if (note.between(4, 6.99)) {
        console.log("Recovery!");
    } else if (note.between(0, 3.99)) {
        console.log("Disapproved!");
    } else {
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
