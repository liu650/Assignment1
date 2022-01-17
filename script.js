let n = new Date().toLocaleTimeString();
let msgList = '[{"text" : "Welcome to my website!", "time" :"' + n + '"}, {"text" : "Nice to meet you!", "time" :"' + n + '"}]';

function clickSend() {
    let thing = 'initial';
    thing = document.getElementById('msgInput').value;
    document.getElementById('msgInput').value = "";

    let list = JSON.parse(msgList);
    if (thing !== "") {
        list.push({ text: thing, time: new Date().toLocaleTimeString() });
    }
    msgList = JSON.stringify(list);
    change();
    
}

function clickClear() {
    msgList = '[]';
    change();
}

function change() {
    let string = "";
    let list = JSON.parse(msgList);
    for (let item of list) {
        string += item["text"] + "&nbsp <span style=\"font-size: 0.5em\">" + item["time"] + "</span>" + "<br>";
    }
    let thing = document.getElementById('msgPane');
    thing.innerHTML = string;
    thing.scrollTop = thing.scrollHeight;
    // document.getElementById('msgPane').innerHTML = string;
    // document.body.style.background = "red";
}

// function change() {
//     let string = "";
//     let list = JSON.parse(msgList);
//     let thing = document.getElementById('msgPane');
//     for (let item of list) {
//         let newElement =  document.createElement("LI");

//     }


//     // document.getElementById('msgPane').innerHTML = string;
//     // document.body.style.background = "red";

// }






// function myFunction() {
//     var d = new Date();
//     var n = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = n;
//   }