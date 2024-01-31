const btnSearch = document.getElementById("btn-search")
btnSearch.addEventListener("click",searchForQrImg )

function searchForQrImg() {
    const url = document.getElementById("input-form").value
    if(!(url === null || url === "")) {
        const urlToCode = 'https://api.qrserver.com/v1/create-qr-code/?data=' + url +'&size=307x307'

        localStorage.setItem('urlToCode', urlToCode);
        window.location = "qrcode.html"
        console.log(window.location)

    }
}