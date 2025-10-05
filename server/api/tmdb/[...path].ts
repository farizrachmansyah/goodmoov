export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Get the dynamic path from the URL
  const pathParam = event.context.params?.path;
  const path = Array.isArray(pathParam) ? pathParam.join('/') : pathParam || '';

  // Get query params from the frontend request
  const query = getQuery(event);

  // Build the API URL
  const url = new URL(`${config.TMDB_BASE_URL}/${path}`);

  // Add query parameters
  const params = new URLSearchParams({
    api_key: config.TMDB_API_KEY,
    ...query // safe to spread directly here
  });
  url.search = params.toString();

  // Fetch data from TMDB
  return await $fetch(url.toString());
});
