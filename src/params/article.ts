import { articles } from "$lib/articles";

export function match(param: string) {	
    return !!articles[param];
}