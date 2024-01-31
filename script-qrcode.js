const imgQrCode = document.querySelector(".qr-code-img") 
imgQrCode.setAttribute("src", localStorage.getItem('urlToCode'))