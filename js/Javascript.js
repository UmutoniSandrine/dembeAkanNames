var CC, YY, MM, DD, weekDays, dayValue;
var namesOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var namesOfFemales = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
var namesOfMales = ["Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama", "Akosua"];

function validate() {
    var genders = document.getElementsByName("gender");
    if (document.form.year.value == "" || document.form.year.value.length != 4 || document.form.year.value > 2021 || document.form.year.value <= 1940) {
        alert("Please Enter The Year of Birth");
        document.form.year.focus();
        return false;
    }
    else if (document.form.month.value == "" || isNaN(document.form.month.value) ||
        document.form.month.value.length != 2 || document.form.month.value > 12 || document.form.month.value <= 0) {
        alert("Please Month of birth must be in 1 and 12");
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
function byGender() {
    var genders = document.getElementsByName("gender");
    if (gender[0].checked == true) {
        var gender = "male";
    } else if (genders[1].checked == true) {
        var gender = "female";
    } else {
        return false;

    }
    switch (gender) {
        case "male":
            if (dayValue == 1) {
                alert("Born on : " + namesOfDays[0] + " Goes with this Akan name: " + namesOfMales[0]);
            }
            else if (dayValue == 2) {
                alert("Born on : " + namesOfDays[1] + " Goes with this Akan name: " + namesOfMales[1]);
            } else if (dayValue == 3) {
                alert("Born on : " + namesOfDays[2] + " Goes with this Akan name: " + namesOfMales[2]);

            }
            if (dayValue == 4) {
                alert("Born on : " + namesOfDays[3] + " Goes with this Akan name: " + namesOfMales[3]);
            }
            else if (dayValue == 5) {
                alert("Born on : " + namesOfDays[4] + " Goes with this Akan name: " + namesOfMales[4]);
            } else if (dayValue == 6) {
                alert("Born on : " + namesOfDays[5] + " Goes with this Akan name: " + namesOfMales[5]);

            }
            else if (dayValue == -0) {
                alert("Born on : " + namesOfDays[5] + " Goes with this Akan name: " + namesOfMales[6]);
                break;

            }
        case "female":
            if (dayValue == 1) {
                alert("Born on : " + namesOfDays[0] + " Goes with this Akan name: " + feamesOfMales[0]);
            }
            else if (dayValue == 2) {
                alert("Born on : " + namesOfDays[1] + " Goes with this Akan name: " + feamesOfMales[1]);

            }
            else if (dayvalue == 3) {
                alert("Born on : " + namesOfDays[2] + " Goes with this Akan name: " + feamesOfMales[2]);
            }
            else if (dayValue == 4) {
                alert("Born on : " + namesOfDays[3] + " Goes with this Akan name: " + feamesOfMales[3]);

            }
            else if (dayValue == 5) {
                alert("Born on : " + namesOfDays[4] + " Goes with this Akan name: " + feamesOfMales[4]);
            }
            else if (dayValue == 6) {
                alert("Born on : " + namesOfDays[5] + " Goes with this Akan name: " + feamesOfMales[5]);

            }
            else if (dayValue == -0) {
                alert("Born on : " + namesOfDays[6] + " Goes with this Akan name: " + feamesOfMales[6]);
            }
            break;
        default:



    }

}
function getName() {
    dayVal = findDayvalue();
    byGender();
}
