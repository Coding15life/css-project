export async function GET(req) {
  const res = await fetch("https://v1.basketball.api-sports.io/leagues?name=NBA", {
    headers: {
      "x-apisports-key": process.env.BASKETBALL_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json(data);
}