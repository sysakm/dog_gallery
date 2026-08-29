import * as axios from "axios";
import type {DogBreed, TheDogApiBreed, TheDogApiError} from "../types/dog.ts";

const DOG_API_BASE_URL = 'https://api.thedogapi.com/v1'

const dogApi = axios.create({
    baseURL: DOG_API_BASE_URL,
    timeout: 5000,
    headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'x-api-key': import.meta.env.VITE_DOG_API_KEY ?? ''
    }
})

function formatValue(value: string | undefined) {
    return value?.trim() || 'No data'
}

function formatMetricRange(value: string | undefined, unit: string) {
    return value?.trim() ? value.trim() + ' ' + unit : 'No data'
}

function mapBreed(breed: TheDogApiBreed): DogBreed {
    return {
        id: String(breed.id),
        name: breed.name,
        description: formatValue(breed.bred_for),
        origin: formatValue(breed.origin),
        breedGroup: formatValue(breed.breed_group),
        lifeSpan: formatMetricRange(breed.life_span, 'years'),
        weight: formatMetricRange(breed.weight?.metric, 'kg'),
        height: formatMetricRange(breed.height?.metric, 'cm'),
        temperament: formatValue(breed.temperament),
        mainImageUrl: breed.image?.url || null
    }
}

export async function fetchBreeds(): Promise<Array<DogBreed>> {
    try {
        const response = await dogApi.get<Array<TheDogApiBreed>>(
            '/breeds'
        )
        return response.data.map(mapBreed)
    } catch (error) {
        if (axios.isAxiosError<TheDogApiError>(error)) {
            if (error.response) {
                const eData = error.response.data
                throw new Error(`${eData.statusCode }-${eData.error}: ${eData.message}`);
            }
        }
        throw new Error('TheDogApi request failed - something went wrong');
    }
}