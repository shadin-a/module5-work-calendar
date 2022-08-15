//GLOBAL VARIABLES
var textInput = {
    "txtArea0": "",
    "txtArea1": "",
    "txtArea2": "",
    "txtArea3": "",
    "txtArea4": "",
    "txtArea5": "",
    "txtArea6": "",
    "txtArea7": "",
    "txtArea8": "",
};

//GLOBAL CONSTANTS
const currentDate = document.getElementById("currentDay");
const allData = [ // each one of these is a data object
    {
        index: 0,
        time: "9am",
        buttonID: 'saveBtn0',
        textAreaID: "txtArea0",
        moment: moment.curr
      },
      {
        index: 1,
        time: "10am",
        buttonID: 'saveBtn1',
        textAreaID: "txtArea1",
      },
      {
        index: 2,
        time: "11am",
        buttonID: 'saveBtn2',
        textAreaID: "txtArea2",
      },
      {
        index: 3,
        time: "12pm",
        buttonID: 'saveBtn3',
        textAreaID: "txtArea3",
      },
      {
        index: 4,
        time: "1pm",
        buttonID: 'saveBtn4',
        textAreaID: "txtArea4",
      },
      {
        index: 5,
        time: "2pm",
        buttonID: 'saveBtn5',
        textAreaID: "txtArea5",
      },
      {
        index: 6,
        time: "3pm",
        buttonID: 'saveBtn6',
        textAreaID: "txtArea6",
      },
      {
        index: 7,
        time: "4pm",
        buttonID: 'saveBtn7',
        textAreaID: "txtArea7",
      },
      {
        index: 8,
        time: "5pm",
        buttonID: 'saveBtn8',
        textAreaID: "txtArea8",
      },
]; 

//EVENT LISTENER
var saveBtns = document.getElementsByClassName("saveBtns");
for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", onClickSaveButton);
}

//FUNCTIONALITY
currentDate.innerHTML = moment();

function onClickSaveButton() {
    var dataObject = allData.find((item) => item.buttonID == this.id);
    var textAreaID = dataObject.textAreaID;
    saveEvents(textAreaID);
};

function saveEvents(textAreaID) {
    var eventInput = document.getElementById(textAreaID).value;
    textInput[textAreaID] = eventInput;
    localStorage.setItem("textInput", JSON.stringify(textInput));
}

window.onload = function() {
    setRowColors(9, 'row0');
    for (var i = 0; i < allData.length; i++) {
        var hour = i + 9;
        var rowIdName = 'row' + i;
        setRowColors(hour, rowIdName);
    }

    var savedTextInput = localStorage.getItem("textInput");
    if (savedTextInput !== null) {
        textInput = JSON.parse(savedTextInput);  
    }

    document.getElementById("txtArea0").innerHTML = textInput.txtArea0;
    document.getElementById("txtArea1").innerHTML = textInput.txtArea1;
    document.getElementById("txtArea2").innerHTML = textInput.txtArea2;
    document.getElementById("txtArea3").innerHTML = textInput.txtArea3;
    document.getElementById("txtArea4").innerHTML = textInput.txtArea4;
    document.getElementById("txtArea5").innerHTML = textInput.txtArea5;
    document.getElementById("txtArea6").innerHTML = textInput.txtArea6;
    document.getElementById("txtArea7").innerHTML = textInput.txtArea7;
    document.getElementById("txtArea8").innerHTML = textInput.txtArea8;
}

function setRowColors(hour, rowId) {
    const currentHour = moment();
    var color = null;
    var rowHour = moment()
    .startOf("day")
    .hour(hour)
    .minute(0);

    if (currentHour.hour() == rowHour.hour()) {
        color = "red"; 
    } else if (currentHour.hour() > rowHour.hour()) {
        color = "grey";
    } else { 
       color = "green";
    }

    document.getElementById(rowId).style.backgroundColor = color;
}