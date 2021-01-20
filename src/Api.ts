import axios from "axios";

export const fetchData = () => {
    const hotelsPromise = fetchHotels();

    return {
        hotels: wrapPromise(hotelsPromise),
    }
}


const wrapPromise =  (promise: Promise<object>) => {
    // set Status
    let status = "pending";
    // store result
    let result: any;
    // wait for promise
    let suspender = promise.then(
        res => {
            status = "success";
    
            result = res;
        },
        err => {
            status = "error";
            result = err
        }
        )
        return {
        read(){
            if (status === "pending"){
                throw suspender; 
            } else if (status === "error"){
                throw result;
            } else if (status === "success"){
                return result;
            }
        }
    }

}

const fetchHotels = async () => {
  console.log("Fetching Hotels...");
  return await axios
    .get("https://600568e875860e0017c5c7f8.mockapi.io/api/v1/hotels")
    .then((res) => res.data)
    .catch((err) => console.log("Got this error when fetching Hotels", err));
};
