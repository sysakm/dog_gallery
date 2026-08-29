import type {DogBreed, RequestStatus} from "../types/dog.ts";
import {useState} from "react";
import {fetchBreeds} from "../api/dogApi.ts";

function GalleryPage() {

    const [status, setStatus] = useState<RequestStatus>('idle')
    const [data, setData] = useState<Array<DogBreed>>([])
    const [error, setError] = useState<string>('')

    async function handleRequest() {
        setStatus('loading')
        try {
            const data = await fetchBreeds()
            setStatus('success')
            setData(data)
            setError('')
        } catch (error) {
            setStatus('error')
            setData([])
            setError(error instanceof Error ? error.message : 'Something went wrong')
        }
    }

    return (
        <>
            Gallery Page
            <div>
                {status}
            </div>
            <div>
                {JSON.stringify(data)}
            </div>
            <div>
                {error}
            </div>
            <button type='button' onClick={handleRequest}>Load</button>
        </>
    )
}

export default GalleryPage