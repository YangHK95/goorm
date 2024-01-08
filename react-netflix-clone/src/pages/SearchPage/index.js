import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../api/axios'

export default function SearchPage() {
    const [searchResult, setSearchResult] = useState([])


    console.log("useLocation: ", useLocation())
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery()
    const searchTerm = query.get("q")
    console.log("searchTerm", searchTerm)

    useEffect(() => {
        if (searchTerm) {
            fetchSearchMovie(searchTerm)
        }
    }, [searchResult])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            )
            console.log("request", request)
            setSearchResult(request.data.results)
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <div></div>

    )
}
