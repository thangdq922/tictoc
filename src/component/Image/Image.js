import { forwardRef } from 'react';
import images from '../../assets/image';
import styles from './Image.module.css';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {

    const handleError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = images.noImage;
    }

    return (
        <img
            className={[styles.wrapper, className].join(' ')}
            ref={ref}
            src={src || images.noImage}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;