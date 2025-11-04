// Question No 01
// Three Variable in One Line
var name, age, certification;
name = "Sami Ullah";
age = "17";
certification = "MERN STAKE DEVELOPER";
function showAlert1() {
    alert("Name: "+ name + "\nAge: " + age + "\ncertification: " + certification)
};

// Question 02
// 05 Leagel Names
var u1 = "samiUllah1";
var u_2 = "ahmed_Qurashi2";
var $u3 = "$ehalAtiq3";
var u_1City = "karachi3No";
var $user2City = "$lahore";

// 05 illegal Names
var illegalNames = "1user, user name, @age, #5sami, STU1DENT$";

function showAlert2() {
    alert(
        "5 legal Name of JavaScript\n" +
        u1 + "\n" + u_2 + "\n" + $u3 + "\n" + u_1City + "\n" + $user2City + "\n" + "\n" + "05 illegal Name of JavaScript\n" + illegalNames
    )
};

// Question 03
function showAlert3() {
    let newPage = window.open("", "_blank");
    
    newPage.document.write("<h1>Rules for naming JS variables</h1>")
    newPage.document.write("Variable names can only contain Letters , Numbers , $ And _.</br>")
    newPage.document.write("Variables must begin with a $name , _name or name1.</br>")
    newPage.document.write("Variable names are case sensitive.<br>");
    newPage.document.write("Variable names should not be JS keywords.");
};