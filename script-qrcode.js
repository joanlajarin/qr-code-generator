let imgQrCode = document.querySelector(".qr-code-img") 
imgQrCode.setAttribute("src", localStorage.getItem('urlToCode'))

const btnDownload = document.getElementById("btn-download")
btnDownload.addEventListener("click",downLoadImg )

function downLoadImg() {
    imgQrCode = document.querySelector(".qr-code-img")
    downloadImage(imgQrCode.getAttribute("src"))
}
const btnShare = document.getElementById("btn-share")
btnShare.addEventListener("click", shareImg)

function shareImg() {
    navigator.clipboard.writeText(imgQrCode.getAttribute("src"))
    window.alert("QR Code copied!")
}

//https://dev.to/sbodi10/download-images-using-javascript-51a9
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'qr_code'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }