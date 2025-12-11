export const unstable_flag = <T>(config: {
    key: string;
    defaultValue?: T;
    decide?: () => Promise<T> | T;
}) => {
    const fn = async () =>
        typeof config.decide === "function"
            ? await config.decide()
            : (config.defaultValue as T);
    (fn as unknown as { key: string }).key = config.key;
    return fn as unknown as () => Promise<T>;
};
