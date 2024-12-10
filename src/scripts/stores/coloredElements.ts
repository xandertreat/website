import { atom } from 'nanostores'

export const $coloredElements = atom(0);

export const isEraserEnabled = () => {
    return $coloredElements.get() > 0;
}