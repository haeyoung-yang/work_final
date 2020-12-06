$(document).ready(function () {
    var button_status = 0;
    $(".run-button").on("click", function () {
        if (button_status == 0) {
            $(".menu").animate({ right: "20%" }, 1000)
            $(".guest").animate({ opacity: "100%" }, 1000)
            $(".play").animate({ opacity: "100%" }, 1000)
            $(".volume").animate({ opacity: "100%" }, 1000)
            $(".run-button").text("▶")
            button_status = 1;
        } else if (button_status == 1) {
            $(".menu").animate({ right: "0%" }, 1000)
            $(".guest").animate({ opacity: "0%" }, 1000)
            $(".play").animate({ opacity: "0%" }, 1000)
            $(".volume").animate({ opacity: "0%" }, 1000)
            $(".run-button").text("◀")
            button_status = 0;
        }

    })
    $(".guest").on("click", function () {
        $(".name").animate({ width: "61%" }, 1000)
    })
    $(".play").on("click", function () {
        $(".audio").animate({ opacity: "100%" }, 1000)
    })
})
