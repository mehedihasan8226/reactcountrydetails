// https://restcountries.com/v3.1/independent?status=true&fields=languages,capital
//https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags

import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

export const getCountryData = ()=>{
    return api.get("/all?fields=name,population,capital,region,flags")
}


// HTTP GET Method for indivisual Name:
export const getCountryIndData = (name)=>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,capital,region,subregion,tld,currencies,languages,borders,flags`)
    
}