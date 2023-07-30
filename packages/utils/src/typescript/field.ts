type PartialField<Source, Fields extends keyof Source> = Omit<Source, Fields> &
  Partial<Pick<Source, Fields>>;

export type { PartialField };
