export interface BikeDTO { 
    id: string;//UUID
    name: string;//in 'Mountain Bike' | 'City Bike' | 'Road Bike' | etc.
    color: string;//in 'red' | 'blue' | 'green' | etc.
    year: number;//in YYYY format
    brand: string;//ENUM: 'bianci' | 'bmc' | 'ciclistino' | etc.
    category: string;//ENUM: 'mountainbikes' | 'citybikes' | 'roadbikes' | etc.
    wheelDiameter: number;//inches
    frameMaterial: string;//ENUM: 'aluminum' | 'carbon' | 'steel'
    size: string;//inches
    country: string;//country of
    manufacturer: string;//manufacturer name
    tires: string;//inches
    frame: string;//inches
    fork: string;//inches
    chain: string;//inches
    numberOfSpeeds: number;//inches
    brakeType: string;//ENUM: 'disc' | 'rim' | etc.
    warranty: string;//in months
    price: number;//in USD
    description: string;//detailed description
    socialNetworks: {//manufacturer social media links
        website: string;
        instagram: string;
        facebook: string;
        twitter: string;
    };
    images: [{
        extension: string,
        id: string,
        originName: string,
        path: string,
        size: 0,
        storageName: string,
    }];
    status: string;//ENUM: 'active' | 'inactive' | 'discontinued'
}



export const brand = [
    { id: 1, name: "BIANCI", value: "BIANCI" },
    { id: 2, name: "BMC", value: "BMC" },
    { id: 3, name: "CICLISTINO", value: "CICLISTINO" },
    { id: 4, name: "CIPOLLINI", value: "CIPOLLINI" },
    { id: 5, name: "COLNAGO", value: "COLNAGO" },
];

export const framematerial = [
    { id: 1, name: "ALUMINUM", value: "ALUMINUM" },
    { id: 2, name: "CARBON", value: "CARBON" },
    { id: 3, name: "STEEL", value: "STEEL" },
];

export const categories = [
    { id: 1, name: "MOUNTAIN_BIKES", value: "MOUNTAIN_BIKES" },
    { id: 2, name: "CITY_BIKES", value: "CITY_BIKES" },
    { id: 3, name: "ROAD_BIKES", value: "ROAD_BIKES" },
    { id: 4, name: "GRAVEL_BIKES", value: "GRAVEL_BIKES" },
    { id: 5, name: "TRACK_BIKES", value: "TRACK_BIKES" },
    {
        id: 6,
        name: "TRIATHLON_BIKES",
        value: "TRIATHLON_BIKES",
    },
    {
        id: 7,
        name: "DOUBLE_SUSPENSION_BIKES",
        value: "DOUBLE_SUSPENSION_BIKES",
    },
    {
        id: 8,
        name: "ELECTRIC_BICYCLES",
        value: "ELECTRIC_BICYCLES",
    },
    {
        id: 9,
        name: "WOMEN_BICYCLES",
        value: "WOMEN_BICYCLES",
    },
    {
        id: 10,
        name: "CHILDREN_BICYCLES",
        value: "CHILDREN_BICYCLES",
    },

    
];

export interface filter {
    priceFrom: [0],
    priceTo: [0],
    checked: true,
    category: "",
    brand: "",
    frame: "",
    color: "",
    name: ""
}