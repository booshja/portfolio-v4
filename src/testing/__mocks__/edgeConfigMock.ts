export const get = <T>(_key: string): Promise<T | undefined> => {
    return Promise.resolve(undefined as unknown as T);
};
