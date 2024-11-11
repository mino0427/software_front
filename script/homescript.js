let navigation = document.querySelector(".navigation");
document.querySelector(".menuToggle").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};

// 저장소에서 token을 읽어봄
// 이유는 로그인인지 로그아웃인지 확인하기 위해
let token = sessionStorage.getItem("token"); // set은 넣는거 get은 가져오는거
// console.log(token);
if (token === null) {
  // 과거에 로그인 한 적이 없음 (로그인 안됏으면 div1을 보이게하기, div2는 안보이게함)
  div1.style.display = "block";
  div2.style.display = "none";
} else {
  // 과거에 로그인 한적이 있음
  div1.style.display = "none";
  div2.style.display = "block";
}

function deleteToken() {
  if (confirm("로그아웃 할까요?")) {
    // confirm은 alert처럼 위에 물어보는 창이 뜨는 거
    sessionStorage.removeItem("token"); // 로그인하면 token이 세션스토리지에 저장되어있는데 그 토큰을 지운다는 거임
    window.location.href = "home.html";
  } else {
    window.location.href = "home.html";
  }
}
