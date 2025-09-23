export const unstable_flag = <T>(config: { key: string; defaultValue?: T; decide?: () => Promise<T> | T }) => {
    return {
        key: config.key,
        get: async () => (typeof config.decide === "function" ? await config.decide() : (config.defaultValue as T)),
    } as unknown as T;
};

