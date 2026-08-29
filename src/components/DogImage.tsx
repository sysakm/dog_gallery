import {useEffect, useState} from "react";

type Props = {
    src: string | null;
    name: string;
}

function DogImage({src, name}: Props) {
    const [imageFailed, setImageFailed] = useState(false)

    useEffect(() => {
        setImageFailed(false)
    }, [src])

    const showPlaceholder = !src || imageFailed
    const initial = name.trim().charAt(0).toUpperCase() || '?'

    return (
        <div className="dog-image">
            {showPlaceholder ? (
                <div
                    className="dog-image__placeholder"
                    role="img"
                    aria-label={`No image available for ${name}`}
                >
                    <span aria-hidden="true">{initial}</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                />
            )}
        </div>
    )
}

export default DogImage