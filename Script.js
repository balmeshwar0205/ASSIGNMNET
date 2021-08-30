// JavaScript source code
document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("submitBtn").addEventListener("click", function (e) {
        var currentDate = new Date(document.getElementById("txtDate").value);
        var formattedCurrentDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
        currentDate.setDate(currentDate.getDate() + 1);
        var formattedNextDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

        var newInputTag = "<input type=\"text\" id=\"txtDate\" placeholder=\"\"/>"
        document.getElementById("dateField").innerHTML = newInputTag;
        document.getElementById("txtDate").value = formattedNextDate;

        document.getElementById("currDateLabel").textContent = "Entered Date: " + formattedCurrentDate;
        document.getElementById("nxtDateLabel").textContent = "Next Date: " + formattedNextDate;
    });

    document.getElementById("resetBtn").addEventListener("click", function(e) {
        var newInputTag = "<input type=\"text\" id=\"txtDate\" placeholder=\"\"/>"
        document.getElementById("dateField").innerHTML = newInputTag;
        document.getElementById("txtDate").placeholder = "Enter Date in MM/DD/YYYY Format";

        document.getElementById("currDateLabel").textContent = "";
        document.getElementById("nxtDateLabel").textContent = "";
    });
});
