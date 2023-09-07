import flightsObj from '../utils/flights.json';
import { lowerCaseTurkish } from '../utils/helpers/helper.js';

export const getFlightsRequest = () => {
    //TODO: add error handling
    return new Promise((resolve, _reject) => {
        resolve(flightsObj.flights)
    })
};

export const getDestinationsRequest = () => {
    //TODO: add error handling
    return new Promise((resolve, _reject) => {
        let destinations = [];
        flightsObj.flights.forEach(flight => {
            destinations.push(flight.destinationAirport.city.name);
        });
        resolve(destinations);
    })
};

export const getOriginsRequest = () => {
    //TODO: add error handling
    return new Promise((resolve, _reject) => {
        let origins = [];
        flightsObj.flights.forEach(flight => {
            origins.push(flight.originAirport.city.name);
        });
        resolve(origins);
    })
};

export const getFlightsByLocationRequest = ({ from, to }) => {
    //TODO: add error handling
    return new Promise((resolve, _reject) => {
        console.log({ from, to })
        let selectableFlights = [];
        flightsObj.flights.forEach(flight => {
            console.log(flight)

            if (lowerCaseTurkish(flight.originAirport.city.name) === lowerCaseTurkish(from) &&
                lowerCaseTurkish(flight.destinationAirport.city.name) === lowerCaseTurkish(to)) {
                selectableFlights.push(flight);
            }
        });
        resolve(selectableFlights);
    })
};