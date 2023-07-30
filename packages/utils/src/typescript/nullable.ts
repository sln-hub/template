type Nullable<T extends object> = { [key in keyof T]: T[key] | null };

export type { Nullable };
