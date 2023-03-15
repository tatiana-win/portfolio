import './Preview.css';
import { CloseIcon } from '../../icons/CloseIcon';
import { useEffect } from 'react';

interface Props {
    videoUrl: string;
    onClose: () => void;
}
export const Preview = ({ videoUrl, onClose }: Props) => {
    useEffect(() => {
        const keyListener = (e: any) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keyup', keyListener);

        return () => {
            window.removeEventListener('keyup', keyListener);
        }
    }, []);

    return (
        <div className="preview">
            <video controls className="preview-video" src={videoUrl} autoPlay />
            <div className="preview-close" onClick={onClose}>
                <CloseIcon />
            </div>
        </div>
    );
}
