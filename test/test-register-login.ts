const base = "http://localhost:3000/api/auth";

async function main() {
  await fetch(`${base}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Test2",
      email: "test2@test.com",
      password: "123456"
    })
  });

  const res = await fetch(`${base}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test@test.com",
      password: "123456"
    })
  });

  console.log(await res.json());
}

main();