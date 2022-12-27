$(".encriptar").click( ()=>{
    var text = $("textarea").val()
    $(".decrypt-container-1").css("display","none")
    $(".decrypted").text(text)
    $(".decrypt-container-2").css("display","flex")
    console.log(text)
})
$(".desencriptar").click( ()=>{
    var text = $("textarea").val()
    $(".decrypt-container-1").css("display","none")
    $(".decrypted").text(text)
    $(".decrypt-container-2").css("display","flex")
    console.log(text)
})

$(".copy").click(()=>{
    
    navigator.clipboard.writeText($(".decrypted").text());
    alert("Copied the text: " + $(".decrypted").text());
})