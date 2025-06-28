import path from 'path'

export const videoExtension = ['.m4v', '.mp4', '.mov'];

export type Mediatype = 'image' | 'video';

export const getMediaType = (uri: string) => {
    return videoExtension.includes(path.extname(uri)) ? 'video' : 'image';
}