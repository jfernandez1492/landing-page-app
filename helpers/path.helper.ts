export const pathPrefix = () => {
  if (process.env.NODE_ENV === "development") {
    return "";
  }

  return process.env.NEXT_PUBLIC_BASE_PATH || "";
};

export const pathBuilder = (path: string) => `${pathPrefix()}${path}`;
