const test = "http://localhost:3000/api/auth";

async function spamLogin() {
    for (let i = 1; i <= 10; i++) {
        const res = await fetch(`${test}/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email: "test@test.com", password: "Wrong"})
        });

        console.log(i, res.status, await res.text());
    }
}

spamLogin();