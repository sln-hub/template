import type { Nullable } from 'vitest';

const invariant: {
  /**
   * @see https://github.com/microsoft/TypeScript/issues/34523#issuecomment-700491122
   */
  log: <T>(condition: Nullable<T>, message: string) => asserts condition is T;
  error: <T>(condition: Nullable<T>, message: string) => asserts condition is T;
} = {
  log: function <T>(
    condition: Nullable<T>,
    message: string
  ): asserts condition is T {
    if (!condition) {
      console.error(message);
    }
  },

  error: function <T>(
    condition: Nullable<T>,
    message: string
  ): asserts condition is T {
    if (!condition) {
      throw new Error(message);
    }
  }
};

export { invariant };
