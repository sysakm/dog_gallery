import {useState} from "react";

type Props = {
    src: string | null;
    name: string;
}

function DogImage({src, name}: Props) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null)

    const showPlaceholder = !src || failedSrc === src
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
                    onError={() => setFailedSrc(src)}
                />
            )}
        </div>
    )
}

export default DogImage