export const mapZodErrorsToFormik = (errors) => {
  let mapedError = {};

  errors.errors.forEach((err) => {
    mapedError[err.path[0]] = err.message;
  });

  return mapedError;
};
