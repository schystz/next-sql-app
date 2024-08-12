import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * FROM user_tokens`;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">User Tokens</h1>
      {rows.map((row, i) => (
        <div key={i}>
          {row.wallet_address} - {row.token_address}
        </div>
      ))}
    </div>
  );
}
