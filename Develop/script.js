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



  






