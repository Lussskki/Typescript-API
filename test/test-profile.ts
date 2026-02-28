const profile = "http://localhost:3000/api/auth";

async function testingProfile() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWExYjQ4Zjc2OTA0YjI3OGU3ZjcyMzQiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3NzIyNzM0OTksImV4cCI6MTc3Mjg3ODI5OX0.S03KH_jtjftEoBVzFFd7254QA763iX2JuIpxdi9oJyk"

    const res = await fetch (`${profile}/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    console.log(await res.json());
}

testingProfile();
