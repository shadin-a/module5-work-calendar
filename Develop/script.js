//current hour is red 
//past hour is grey 
//future hours is green

//GLOBAL VARIABLES
var today = moment();

console.log(
    moment()
     .startOf("day")
     .hour(9)
     .minute(0)
     .format()
 );

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
    //TODAYS DATE FUNCTION
currentDate.innerHTML = today;

function onClickSaveButton() {
    var dataObject = allData.find((item) => item.buttonID == this.id);
    console.log(dataObject);
    var textAreaID = dataObject.textAreaID;

    //console.log('save button clicked for index: ');
    saveEvents(textAreaID);
    renderEvents();
};

function saveEvents(textAreaID) {
    console.log("the text area im trtying to grab: ", textAreaID);
    var eventInput = document.getElementById(textAreaID).value;
    console.log(eventInput);
   
    localStorage.setItem("eventInput", JSON.stringify(eventInput));
    console.log(localStorage);
}

function renderEvents(v) {
        if (!localStorage.getItem(v)) {
            return "";// You can change this to your defualt value. 
        }
        return localStorage.getItem(v);
    }



  






