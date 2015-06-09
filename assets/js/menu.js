var a = {
    Cars: [
        {
            "CarType": "BMW",
            "carID": "bmw123"
        },
        {
            "CarType": "Mercedes",
            "CarID": "merc123"
        }
    ]
};

$.each(a.Cars, function (key, value) {
    $("#dropDownDest").append($('<option></option>').val(value.carID).html(value.CarType));
});

$('#dropDownDest').change(function () {
    altert($(this).value());
});



