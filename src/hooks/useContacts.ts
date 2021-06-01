import React, { useEffect, useState } from "react";
import { Contacts } from '../interfaces/types'

export const useContacts = () => {
    const [data, setData] = useState<Contacts[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getContacts = async ():Promise<void> => {
            try {
                setIsLoading(true)
                const response = await fetch('https://randomuser.me/api/?results=20')
                const { results, error } = await response.json()
                if (error) {
                    throw new Error(error)
                }
                setData(results)
                setIsError(false)
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getContacts()
    }, [])

    return { data, isLoading, isError }
}