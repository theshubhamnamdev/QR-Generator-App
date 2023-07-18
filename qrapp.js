let form = document.querySelector("form")
let input = document.querySelector("input")
let select = document.querySelector("#size")
let image = document.querySelector("img")
let button = document.querySelector("#button")
let downloadbtn = document.getElementById("Download")
let blob;
let filename;
// let alert = document.querySelector("alert")
// console.log(button);

const generateQR  = async (e)=>{
 e.preventDefault()
 const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
 blob = await response.blob()
filename=response.url;
//  console.log(response);
//   console.log(response.url);
image.setAttribute("src" , response.url)
form.reset()

}
downloadbtn.addEventListener("click", ()=>{
   let link = document.createElement('a')
   link.href  =URL.createObjectURL(blob)
   link.download = `${filename}.png`;
   link.click()
})





// let alertfunc = ()=>{
// setTimeout(function(){
//     alert.innertext = ""

// },2000)
// }

form.addEventListener("submit" , generateQR)
