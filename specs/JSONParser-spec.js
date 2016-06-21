var JsonParser = require('./../app/JSONParser.js');

describe('JSONParser', function() {

    describe('parse', function() {
        var validResponseData = [
          {
            "VehAvailRSCore": {
              "VehVendorAvails": [
                {
                  "Vendor": {
                    "@Code": "125",
                    "@Name": "ALAMO"
                  },
                  "VehAvails": [
                    {
                      "@Status": "Available",
                      "Vehicle": {
                        "@AirConditionInd": "true",
                        "@TransmissionType": "Automatic",
                        "@FuelType": "Petrol",
                        "@DriveType": "Unspecified",
                        "@PassengerQuantity": "5+",
                        "@BaggageQuantity": "3",
                        "@Code": "IFAR",
                        "@CodeContext": "CARTRAWLER",
                        "@DoorCount": "5",
                        "VehMakeModel": {
                          "@Name": "Toyota Rav4 or similar"
                        },
                        "PictureURL": "https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"
                      },
                      "TotalCharge": {
                        "@RateTotalAmount": "878.98",
                        "@EstimatedTotalAmount": "878.98",
                        "@CurrencyCode": "CAD"
                      }
                    }
                  ]
                }
              ]
            }
          }
        ];
        var expectedOutput = {
            suppliers: {
                'ALAMO': [
                    {
                        id: 0,
                        status: 'Available',
                        airConditioning: true,
                        transmission: 'Automatic',
                        fuelType: 'Petrol',
                        driveType: 'Unspecified',
                        seats: '5+',
                        bags: '3',
                        code: 'IFAR',
                        codeContext: 'CARTRAWLER',
                        doors: 5,
                        description: 'Toyota Rav4 or similar',
                        imageThumbnail: 'https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg',
                        rate: '878.98',
                        currency: 'CAD'
                    }
                ]
            }
        };

        describe('when valid data is supplied', function() {
            it('parses the expected output', function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });

        describe('when no data is supplied', function() {
            it('returns an empty array', function() {
                expect(JsonParser.parse(null)).toEqual({ suppliers: {} });
            });
        });
    });

});
