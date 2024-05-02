"use strict";
{
    //never, unknown and nullable type
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("there is nothing to search");
        }
    };
    searchName(null);
    //unknown type
    const getSpeedInMeterPerSecond = (val) => {
        // there is unknown type
        if (typeof val === "number") {
            const convertedSpeed = (val * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof val === "string") {
            const [value, unit] = val.split(" ");
            const convertedSpeed = (parseFloat(value) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("wrong input");
        }
    };
    getSpeedInMeterPerSecond(`1000 ms^-1`);
    //never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("your code is not working");
}
