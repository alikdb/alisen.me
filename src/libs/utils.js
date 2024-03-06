import {twMerge} from "tailwind-merge";
import {cx} from "classix"

export const cn = (...args) => {
    return twMerge(cx(...args))
}

export const isDevelopment = process.env.NODE_ENV === 'development';