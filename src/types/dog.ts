export type RequestStatus = "idle" | "loading" | "error" | "success"

export type DogBreed = {
    id: string;
    name: string;
    description: string;
    history: string;
    origin: string;
    breedGroup: string;
    lifeSpan: string;
    weight: string;
    height: string;
    temperament: string;
    mainImageUrl: string | null;
}

export type TheDogApiBreed = {
    id: number;
    name: string;
    description?: string;
    history?: string;
    breed_group?: string;
    life_span?: string;
    temperament?: string;
    origin?: string;
    reference_image_id?: string;
    weight?: {
        metric?: string;
    };
    height?: {
        metric?: string;
    };
    image?: {url?: string};
}

export type TheDogApiError = {
    statusCode: number;
    error: string;
    message: string;
}