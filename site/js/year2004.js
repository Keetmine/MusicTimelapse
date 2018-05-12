function random() {
var arr = [], max = 9, rundomnumber, i, block;  blocks = document.querySelectorAll("div[qwestion]"),

  while (arr.length < max) {
      rundomnumber = Math.floor(Math.random() * max);
      if (arr.indexOf(rundomnumber) == -1) {
          arr.push(rundomnumber);
      }
  }

  for (i = 0; i < blocks.length; i++) {
    blocks[i].id = arr[i];
  }
}
