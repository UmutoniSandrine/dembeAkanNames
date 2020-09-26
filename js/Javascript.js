var CC, YY, MM, DD, weekDays, dayVal;
var namesOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var namesOfFemales = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
var namesOfMales = ["Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama", "Akosua"];

function validate() {
    var genders = document.getElementsByName("gender");
    if (document.form.year.value == "" || document.form.year.value.length != 4 || document.form.year.value > 2021
        || document.form.year.value > 1940) {
        alert("please put year of birth");
        document.form.year.focus();
        return false;
    }
    else if (document.form.month.value == "" || isNaN(document.form.month.value) || document.form.month.value.length != 2
        || document.form.month.value > 12 || document.form.month.value <= 0) {
        alert("Month of birth must be between 1 and 12")
        document.form.month.focus();
        return false;

    }
    else if (document.form.date.value == "" || isNaN(document.form.month.value) ||
        document.form.month.value.length != 2 || document.form.date.value > 31 || document.form.date.value <= 0) {
        alert("Please Date of Birth");
        document.form.day.focus();
        return false;
    }
    else if (genders[0].checked == false && genders[1] == false) {
        alert("select female or male in order to continue");
        return false;
    } else {
        return true;
    }


}
function findDayvalue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.subString(0, 2));
    YY = parseInt(year.subString(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    weekDays = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(weekDays);
    return (Math.floor(weekDays));
}
function byGender(){
    var genders  = document.getElementsByName("gender");
    if(gender[0].checked == true){
        var gender ="male";
    }else if()
}
