var CC, YY, MM, DD, weekDays, dayVal;
var namesOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var namesOfFemales = ["Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
var namesOfMales = ["Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama", "Akosua"];

function validate() {
    var genders = document.getElementsByName("gender");
    if (document.form.year.value == "" || document.form.year.value.length != 4 || document.form.year.value > 2021 || document.form.year.value > 1940) {
        alert("please put year of birth");
        document.form.year.focus();
        return false;
    }
}