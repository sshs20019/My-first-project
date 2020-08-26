var checkWord = {
  September:function (form, key){
    if(form.englishWord.value==sepWord[key]){
        alert("정답!");
    }
    else{
        alert("오답...");
    }
  },
  October:function (form, key){
    if(form.englishWord.value==ocWord[key]){
        alert("정답!");
    }
    else{
        alert("오답...");
    }
  }
}
