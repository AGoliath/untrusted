/*#BEGIN_PROPERTIES#*/
{
    "version": "0.100003",
    "commandsIntroduced":
    [ ],
        "music": "The Green"
}
/*#END_PROPERTIES#*/
/*****************
 * 101_Welcome.js *
 *****************
 *
 * Good morning, Dr. Eval.
 *
 * It wasn't easy, but I've managed to get your computer down
 * to you. This system might be unfamiliar, but the underlying
 * code is still JavaScript. Just like we predicted.
 *
 * ... wait ... that does sound familiar to you, right?
 *
 * Well, this time something is different.
 *
 * First things first, gotta get out of this cage.
 *
 */

function startLevel(map) {
/*#START_OF_START_LEVEL#*/
    map.displayChapter('Challenge 1\nGet your computer!');

    map.placePlayer(7,7);
/*#BEGIN_EDITABLE#*/

    for (y = 3; y <= map.getHeight() - 10; y++) {
        map.placeObject(5, y, 'block');
        map.placeObject(map.getWidth() - 10, y, 'block');
    }

    for (x = 5; x <= map.getWidth() - 5; x++) {
        map.placeObject(x, 3, 'block');
        map.placeObject(x, map.getHeight() - 10, 'block');
    }

/*#END_EDITABLE#*/

    map.placeObject(15, 12, 'computer');
    map.placeObject(map.getWidth()-7, map.getHeight()-5, 'exit');

/*#END_OF_START_LEVEL#*/
}

function onExit(map) {
    if (!map.getPlayer().hasItem('computer')) {
        map.writeStatus("Don't forget to pick up the computer!");
        return false;
    } else {
        return true;
    }
}
