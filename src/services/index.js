const context = new Map();
export const getService = (Service) => {
  if (context.has(Service)) {
    return context.get(Service);
  }
  const service = new Service();
  context.set(Service, service);
  return service;
};
