import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading'

const Results = () => {

    const { getResults, results, searchTerm, setSearchTerm, loading } = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        getResults('/search/q=Oluwasanmi Idowu')
     },[])

    if (loading) return <Loading />

  return (
    <div>
        Result
    </div>
  )
}


export default Results;
