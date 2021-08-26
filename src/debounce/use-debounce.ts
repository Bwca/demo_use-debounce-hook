import { useEffect } from "react";

import { debounce } from "./debounce";

export const useDebounce = <A = unknown, R = void>(fn: (args: A) => R, ms: number) => {
    const [debouncedFun, cancel] = debounce<A, R>(fn, ms);

    useEffect(() => () => cancel());

    return debouncedFun;
};