var cookies = 0;

function moreCookies() {
    cookies+=1;
    document.getElementById("score").innerHTML = cookies;
}

localStorage.cookies=cookies;