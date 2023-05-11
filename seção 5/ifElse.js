const showResult = function (note) {
    if (note >= 7) {
        console.log("Approved!");
    } else {
        console.log("Disapproved!");
    }
}

showResult(10);
showResult(4);