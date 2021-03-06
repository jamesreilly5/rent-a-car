var parseCar = function(carData, index) {
    // Making the assumption that these values are always provided
    return {
        // TODO: What if nested values are null? Add handling.
        // TODO: Handle invalid valius?
        id: index,
        status: carData['@Status'],
        airConditioning: Boolean(carData['Vehicle']['@AirConditionInd']),
        transmission: carData['Vehicle']['@TransmissionType'],
        fuelType: carData['Vehicle']['@FuelType'],
        driveType: carData['Vehicle']['@DriveType'],
        seats: carData['Vehicle']['@PassengerQuantity'],
        bags: carData['Vehicle']['@BaggageQuantity'],
        code: carData['Vehicle']['@Code'],
        codeContext: carData['Vehicle']['@CodeContext'],
        doors: parseInt(carData['Vehicle']['@DoorCount']),
        description: carData['Vehicle']['VehMakeModel']['@Name'],
        imageThumbnail: carData['Vehicle']['PictureURL'],
        rate: parseFloat(carData['TotalCharge']['@RateTotalAmount']),
        currency: carData['TotalCharge']['@CurrencyCode'],
        visible: true
    };
};

var parseSuppliers = function(supplierData, index) {
    var carsData = [];
    for(var i = 0; i < supplierData['VehAvails'].length; i++) {
        var carData = parseCar(supplierData['VehAvails'][i], i);
        carsData.push(carData);
    }
    return carsData;
};

var parsePickupInfo =  function(pickupData) {
    return {
        pickupDate: new Date(Date.parse(pickupData['@PickUpDateTime'])),
        returnDate: new Date(Date.parse(pickupData['@ReturnDateTime'])),
        pickupLocation: pickupData['PickUpLocation']['@Name'],
        returnLocation: pickupData['ReturnLocation']['@Name']
    }
};

module.exports = {
    parse: function(data) {
        model = { suppliers: {}, pickupInfo: {} };

        // TODO: Consider what happens when a huge array is given (i.e. should we paginate results)
        if(!data) { return model }
        model.pickupInfo = parsePickupInfo(data[0]['VehAvailRSCore']['VehRentalCore']);

        var suppliersData = data[0]['VehAvailRSCore']['VehVendorAvails'];
        for(var i = 0; i < suppliersData.length; i++) {
            var key = suppliersData[i]['Vendor']['@Name'],
                supplierData = parseSuppliers(suppliersData[i], i);
            model.suppliers[key] = supplierData;
        }
        return model;
    }
};
