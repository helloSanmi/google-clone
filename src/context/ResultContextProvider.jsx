import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
const API_KEY = process.env.REACT_APP_API_KEY


export const ResultContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Buhari')

    const getResults = async (searchType) => {
        setLoading(true)

        const response = await fetch(`${baseUrl}${searchType}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const results = await response.json();
        
        if(searchTerm.includes('/news')){
            setData(results.entries)
        }
        else if(searchType.includes('/image')){
            setData(results.image_results)
        }
        else setData(results.results)

        console.log(results)
        setLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, data, searchTerm, setSearchTerm, loading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);