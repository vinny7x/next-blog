type TreeifiedZodError = {
  errors: string[];
  properties?: Record<string, { errors: string[] }>;
};

export function getZodErrorMessages(
  error: TreeifiedZodError
): string[] {
  return [
    ...error.errors,
    ...Object.values(error.properties ?? {}).flatMap(
      prop => prop.errors
    ),
  ];
}
