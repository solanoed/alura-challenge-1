$(".encriptar").click(() => {
  if ($("textarea").val() != "") {
    var text = Crypt($("textarea").val());
    $(".decrypt-container-1").addClass("animation-off");
    $(".decrypted").text(text);
    $(".decrypt-container-2").addClass("animation-on");
    $(".decrypt-container-2").css("display", "flex");
  } else {
    setTimeout(() => {
      toggleWarning(false);
    }, 3000);
    toggleWarning(true);
  }
});

$(".desencriptar").click(() => {
  var text = reverseCrypt($("textarea").val());
  $(".decrypt-container-1").css("display", "none");
  $(".decrypted").text(text);
  $(".decrypt-container-2").css("display", "flex");
});

$(".copy").click(() => {
  navigator.clipboard.writeText($(".decrypted").text());

  fadeOut();
});

const fadeOut = async () => {
  $(".copied-container").removeClass("fout");
  $(".copied-container").addClass("fin");
  setTimeout(() => {
    $(".copied-container").addClass("fout");
  }, "2000");
  setTimeout(() => {
    $(".copied-container").removeClass("fin");
  }, "2000");
};

const Crypt = (input) => {
  input = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split("");

  let input2 = [];

  input.map((i) => {
    if (i === "a") {
      input2.push("ai");
    } else if (i === "e") {
      input2.push("enter");
    } else if (i === "i") {
      input2.push("imes");
    } else if (i === "o") {
      input2.push("ober");
    } else if (i === "u") {
      input2.push("ufat");
    } else {
      input2.push(i);
    }
  });

  input2 = input2.join("");
  return input2;
};

const reverseCrypt = (array) => {
  array = array
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return array;
};

const toggleWarning = (bool) => {
  if (bool) {
    $(".warning-text").css("display", "none");
    $(".warning-icon").addClass("w-i-r");
    $(".wt1").addClass("w-i-r");
    $(".wt1").css("display", "block");
  }else{
    $(".wt1").css("display", "none");
    $(".warning-text").css("display", "block");
    $(".warning-icon").removeClass("w-i-r");
    $(".wt1").removeClass("w-i-r");
  }
};
const animations = () => {
  //   $("textarea::placeholder").css("color", "red");
  // $(".decrypt-container").addClass("animate__fadeInRight")
  // $(".bottom-container").addClass("animate__fadeInUp")
  // $(".text").addClass("animate__flash")
};

const mobile = () => {};
