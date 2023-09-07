import { getDestinationsRequest, getFlightsByLocationRequest, getFlightsRequest, getOriginsRequest } from "../services/flightService";
import { saveToStorage } from "./storageController";

export const getFlightByLocation = ({ from, to }) => {
    return new Promise((resolve, reject) => {
        let getFlightsByLocationPromise = getFlightsByLocationRequest({ from, to });
        getFlightsByLocationPromise.then((data) => {
            if (data.length > 0) {
                saveToStorage("listedFlights", data);
                resolve(data);
            } else {
                reject(false);
            }
        }, (err) => {
            reject(err);
        });
    });
};

export const getFlights = () => {
    return new Promise((resolve, reject) => {
        let getFlightsPromise = getFlightsRequest();
        getFlightsPromise.then((data) => {
            saveToStorage(data);
            resolve(data);
        }, (err) => {
            console.log(err);
            reject(err);
        });
    });
};

export const getDestinations = () => {
    return new Promise((resolve, reject) => {
        let getDestinationsPromise = getDestinationsRequest();
        getDestinationsPromise.then((data) => {
            saveToStorage(data);
            resolve(data);
        }, (err) => {
            console.log(err);
            reject(err);
        });
    });
};

export const getOrigins = () => {
    return new Promise((resolve, reject) => {
        let getOriginsPromise = getOriginsRequest();
        getOriginsPromise.then((data) => {
            saveToStorage(data);
            resolve(data);
        }, (err) => {
            console.log(err);
            reject(err);
        });
    });
};