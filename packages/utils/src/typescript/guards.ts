function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

function isNullOrUndefined<T>(
  value: T | null | undefined
): value is null | undefined {
  return value === null || value === undefined;
}

export { isDefined, isNullOrUndefined };
