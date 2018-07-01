$("document").bind('click', function(initReset) {

    initReset(function() {

        var ranNumber = 0;
        var chosenVar = 0;
        var wintotalVar = 0;
        var losetotalVar = 0;


        chosen = Math.floor(Math.random() * 69) + 30;

        $(".img").on('click', function() {

            $("#imgCont").html('Random Result: ' + random);
            for (var i = 0; i < 4; i++) {

                var random = Math.floor(Math.random() * 11) + 1;
                console.log(random);

                var spaceRocks = $(".img")
                spaceRocks.attr({
                    "data-random": random
                });
                // $("#imgCont").append(spaceRocks);
            }
            $(".img").on('click', function() {
                console.log($(this).attr('data-random'));
            });

            document.getElementById("rockObject").onload(function() {
                if (wintotalVar === chosenVar) {
                    alert("you win");
                    wintotalVar++;
                    $("wintotalVar").append("Wins: " + wintotalVar)

                } else if (losetotalVar > chosenVar) {
                    alert("you lose");
                    losetotalVar++;
                    $("losetotalVar").append("Losses: + losetotalVar")
                }
            })
        })

        document.getElementById("redRock").onclick(function() {
            totalVar += chosenVar
        })
        document.getElementById("ylwRock").onclick(function() {
            totalVar += chosenVar
        })
        document.getElementById("bluRock").onclick(function() {
            totalVar += chosenVar
        })
        document.getElementById("grnRock").onclick(function() {
            totalVar += chosenVar
        })

    })
});
// write js to display/log score

// write js to display win/loss