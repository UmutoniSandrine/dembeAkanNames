var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function validate() {
    var genders = document.getElementsByName("gender");
    if (document.form.year.value == "" || document.form.year.value.length != 4 || document.form.year.value > 2100 || document.form.year.value <= 1900) {
        alert("Please provide a valid year of birth! eg 2019");
        document.form.year.focus();
        return false;
    }
    else if (document.form.month.value == "" || isNaN(document.form.month.value) ||
        document.form.month.value.length != 2 || document.form.month.value > 12 || document.form.month.value <= 0) {
        alert("Please provide your month of birth! between 1 and 12");
        document.form.month.focus();
        return false;
    }
    else if (document.form.date.value == "" || isNaN(document.form.month.value) ||
        document.form.month.value.length != 2 || document.form.date.value > 31 || document.form.date.value <= 0) {
        alert("Please provide a valid date that you were born in!");
        document.form.day.focus();
        return false;
    }
    else if (genders[0].checked == false && genders[1].checked == false) {
        alert(" select male or female to get akan name");
        return false;
    }
    else {
        return true;
    }

}

function findDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.floor(d));
}

function byGender() {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "male";
    }
    else if (genders[1].checked == true) {
        var gender = "female";
    }
    else {
        return false;
    }
    switch (gender) {
        case "male":
            if (dayValue == 1) {
                alert("Born on " + dayNames[0] + " Goes with this Akan name: " + maleNames[0]);
            }
            else if (dayValue == 2) {
                alert("Born on " + dayNames[1] + " Goes with this Akan name: " + maleNames[1]);
            }
            else if (dayValue == 3) {
                alert("Born on " + dayNames[2] + " Goes with this Akan name: " + maleNames[2]);
            }
            else if (dayValue == 4) {
                alert("Born on " + dayNames[3] + " Goes with this Akan name: " + maleNames[3]);
            }
            else if (dayValue == 5) {
                alert("Born on " + dayNames[4] + " Goes with this Akan name: " + maleNames[4]);
            }
            else if (dayValue == 6) {
                alert("Born on " + dayNames[5] + " Goes with this Akan name: " + maleNames[5]);
            }
            else if (dayValue == -0) {
                alert("Born on " + dayNames[6] + " Goes with this Akan name: " + maleNames[6]);
            }
            break;
        case "female":
            if (dayValue == 1) {
                alert("Born on " + dayNames[0] + " Goes with this Akan name:  " + femaleNames[0]);
            }
            else if (dayValue == 2) {
                alert("Born on" + dayNames[1] + " Goes with this Akan name: " + femaleNames[1]);
            }
            else if (dayValue == 3) {
                alert("Born on " + dayNames[2] + " Goes with this Akan name: " + femaleNames[2]);
            }
            else if (dayValue == 4) {
                alert("Born on " + dayNames[3] + " Goes with this Akan name: " + femaleNames[3]);
            }
            else if (dayValue == 5) {
                alert("Born on " + dayNames[4] + " Goes with this Akan name: " + femaleNames[4]);
            }
            else if (dayValue == 6) {
                alert("Born on " + dayNames[5] + " Goes with this Akan name: " + femaleNames[5]);
            } else if (dayValue == -0) {
                alert("Born on " + dayNames[6] + " Goes with this Akan name: " + femaleNames[6]);
            }
            break
        default:

    }
}
function getName() {
    dayValue = findDayValue();
    byGender();
}