function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let bersama = new RegExp("bersama");
  console.log(bersama.exec(data));
}

regex();
