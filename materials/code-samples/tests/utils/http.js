export const mockResponse200 = (body) => async () =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });

export const mockResponse404 = async () =>
  new Response("nope", {
    status: 404,
    headers: { "Content-type": "text/html" },
  });
