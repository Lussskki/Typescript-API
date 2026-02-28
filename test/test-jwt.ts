const BASE = "http://localhost:3000/api/auth/profile"; 

async function print(res: Response, label: string) {
  const text = await res.text();
  console.log(label, res.status);
  console.log(text);
}

async function testNoToken() {
  const res = await fetch(BASE);
  await print(res, "No token:");
}

async function testFakeToken() {
  const res = await fetch(BASE, {
    headers: { Authorization: "Bearer abc123" },
  });
  await print(res, "Fake token:");
}

async function testModifiedToken() {
  const fake = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fake.fake";
  const res = await fetch(BASE, {
    headers: { Authorization: `Bearer ${fake}` },
  });
  await print(res, "Modified token:");
}

async function testValidToken() {
  const realToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWExYjQ4Zjc2OTA0YjI3OGU3ZjcyMzQiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3NzIyMDUyMDAsImV4cCI6MTc3MjgxMDAwMH0.RZ-muxTAryqULezxGGC0C1UC2CmxqTrw9sz0N749hDo";
  const res = await fetch(BASE, {
    headers: { Authorization: `Bearer ${realToken}` },
  });
  await print(res, "Valid token:");
}

async function run() {
  await testNoToken();
  await testFakeToken();
  await testModifiedToken();
  await testValidToken();
}

run();