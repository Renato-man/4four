(function() {
    var slots = $(".slot");
    var currentPlayer = "player1";
    $(".column").on("click", function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.children();
        var foundEmptySlot;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                foundEmptySlot = true;
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (!foundEmptySlot) {
            return;
        }
        var slotsInRow = $(".row" + i);
        console.log(slotsInRow);
        if (checkForVictory(slotsInCol)) {
            console.log("winner");
            doVictoryDance(currentPlayer);
        } else if (checkForVictory(slotsInRow)) {
            console.log("winner");
            doVictoryDance(currentPlayer);
        } else if (checkDiag()) {
            console.log("winner");
            doVictoryDance(currentPlayer);
        } else {
            switchPlayers();
        }
    });
    function checkForVictory(slots) {
        var count = 0;
        // console.log(slots);
        for (var i = 0; i < slots.length; i++) {
            // console.log(slots.eq(i));
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }
    function checkDiag() {
        var diagVictory = [
            [0, 7, 14, 21],
            [1, 8, 15, 22],
            [2, 9, 16, 23],
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [5, 10, 15, 20],
            [6, 13, 20, 27],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 14, 19, 24],
            [10, 15, 20, 25],
            [11, 16, 21, 26],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
            [14, 21, 28, 35],
            [15, 20, 25, 30],
            [16, 21, 26, 31],
            [17, 22, 27, 32],
            [18, 25, 32, 39],
            [19, 26, 33, 40],
            [20, 27, 34, 41],
            [21, 26, 31, 36],
            [22, 27, 32, 37],
            [23, 28, 33, 38]
        ];
        for (var j = 0; j < diagVictory.length; j++) {
            var countDiag = 0;
            for (var k = 0; k < diagVictory[j].length; k++) {
                if (slots.eq(diagVictory[j][k]).hasClass(currentPlayer)) {
                    countDiag++;
                }
            }
            if (countDiag === 4) {
                diagVictory[j].forEach(function(checkEach) {
                    slots.eq(checkEach);
                });
                return true;
            }
        }
        // console.log(diagVictory.length);
    }
    function doVictoryDance(player) {
        $(".winner").addClass("on");
        $("p").text(player + " wins");
        setTimeout("location.reload(true);", 7000);
    }
    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }
})();
