$(function () {
    $('.slider').on('input change', function () {

        document.getElementById("valueInput1").value = this.value;
        $("#tagPrice").text(this.value * 10);
    });


    $('#valueInput1').on('input', function (e) {
        document.getElementById("valueInput2").value = this.value;
        $("#tagPrice").text(this.value * 10);

    });
   


})

