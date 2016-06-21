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
                                },
                                {
                                    "@Status": "Available",
                                    "Vehicle": {
                                        "@AirConditionInd": "true",
                                        "@TransmissionType": "Automatic",
                                        "@FuelType": "Petrol",
                                        "@DriveType": "Unspecified",
                                        "@PassengerQuantity": "5",
                                        "@BaggageQuantity": "4",
                                        "@Code": "PCAR",
                                        "@CodeContext": "CARTRAWLER",
                                        "@DoorCount": "4",
                                        "VehMakeModel": {
                                            "@Name": "Chrysler 300 or similar"
                                        },
                                        "PictureURL": "https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"
                                    },
                                    "TotalCharge": {
                                        "@RateTotalAmount": "851.03",
                                        "@EstimatedTotalAmount": "851.03",
                                        "@CurrencyCode": "CAD"
                                    }
                                }
                            ]
                        },
                        {
                            "Vendor": {
                                "@Code": "144",
                                "@Name": "AVIS"
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
                    },
                    {
                        id: 1,
                        status: 'Available',
                        airConditioning: true,
                        transmission: 'Automatic',
                        fuelType: 'Petrol',
                        driveType: 'Unspecified',
                        seats: '5',
                        bags: '4',
                        code: 'PCAR',
                        codeContext: 'CARTRAWLER',
                        doors: 4,
                        description: 'Chrysler 300 or similar',
                        imageThumbnail: 'https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg',
                        rate: '851.03',
                        currency: 'CAD'
                    }
                ],
                'AVIS': [
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
