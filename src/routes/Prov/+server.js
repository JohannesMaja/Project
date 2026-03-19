export async function GET({ url }) {
  const query = url.searchParams.get("q");

  if (!query) {
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" }
    });
  }

  const response = await fetch(
    `https://query1.finance.yahoo.com/v1/finance/search?q=${query}`
  );

  const data = await response.json();

  return new Response(JSON.stringify(data.quotes || []), {
    headers: { "Content-Type": "application/json" }
  });
}