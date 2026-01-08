// const words = [
//   "Full Stack Developer",
//   "Frontend Designer",
//   "Backend Engineer"
// ];

// let i = 0, j = 0, del = false;

// function type(){
//   let word = words[i];
//   let text = del ? word.slice(0,--j) : word.slice(0,++j);
//   document.getElementById("typing").innerText = text;

//   if(!del && j === word.length){
//     del = true;
//   }
//   if(del && j === 0){
//     del = false;
//     i = (i + 1) % words.length;
//   }
//   setTimeout(type, del ? 60 : 120);
// }
// type();
