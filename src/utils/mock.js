/**
 * Mocks the promise flow of an API request.
 * @param payload Logic for the API to do, putting the result within the resolve function.
 * @returns {Promise<any>}
 */
export const mockApiResponse = async (payload) => {
  const randomResponseTime = Math.floor(Math.random()*(1000-100+1)+100);
  return new Promise((resolve) => {
    setTimeout(() => {
      payload(resolve);
    }, randomResponseTime);
  });
};