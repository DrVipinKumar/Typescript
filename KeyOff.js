var displayMsg = function (msg, key) {
    console.log("Value of key ".concat(key, " is ").concat(msg[key]));
};
var infoValue = {
    msg1: "This is message 1",
    msg2: "This is message 2",
    totalmsg: 2
};
displayMsg(infoValue, "msg2");
