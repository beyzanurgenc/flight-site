import { getFlightByDestinationRequest } from "../services/flightService";

export const getFlightByDestination = (dest) => {
    return new Promise((resolve, reject) => {
        let getFlightByDestinationPromise = getFlightByDestinationRequest(dest);
        getFlightByDestinationPromise.then((data) => {
            resolve(data);
        }, (err) => {
            console.log(err);
            reject(err);
        });
    });
};