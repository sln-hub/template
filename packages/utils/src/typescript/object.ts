const objectEntries: <T extends Record<string, unknown>>(
  obj: T
) => [keyof T, T[keyof T]][] = Object.entries;

const objectKeys: <T extends Record<string, unknown>>(obj: T) => (keyof T)[] =
  Object.keys;

const objectValues: <T extends Record<string, unknown>>(
  obj: T
) => T[keyof T][] = Object.values;

export { objectEntries, objectKeys, objectValues };
