function check(form){
  if(form.userid.value=="김성준"){
    if(form.userpassword.value=="20019"){
      alert("로그인 되었습니다");
      window.open('TwwAnswerSheet.html');
    }
    else{
      alert("잘못된 비밀번호입니다");
    }
  }
  else{
    alert("존재하지 않는 아이디입니다");
  }
}
