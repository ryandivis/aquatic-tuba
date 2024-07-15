// utils/memoize.ts

function memoize<T>(fn: () => T): () => T {
    let instance: T;
    return () => {
        if (!instance) {
            instance = fn();
        }
        return instance;
    };
}

export { memoize };
