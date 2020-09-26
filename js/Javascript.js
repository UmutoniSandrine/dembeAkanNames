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
    else if(genders[0].checked )

}