imageLibrary = {
    'position0': {
        'kt': ['kt','images/KT0.png'],
        'kbl': ['kbl', 'images/KBL0.png'],
        'kbr': ['kbr', 'images/KBR0.png'],
        'st': ['st','images/ST0.png'],
        'sbl': ['sbl', 'images/SBL0.png'],
        'sbr': ['sbr', 'images/SBR0.png'],
        'tt': ['tt','images/TT0.png'],
        'tbl': ['tbl', 'images/TBL0.png'],
        'tbr': ['tbr', 'images/TBR0.png'],
        'blank': ['blank', 'images/B0.png']
    },
    'position1': {
        'kt': ['kt','images/KT1.png'],
        'kbl': ['kbl', 'images/KBL1.png'],
        'kbr': ['kbr', 'images/KBR1.png'],
        'st': ['st','images/ST1.png'],
        'sbl': ['sbl', 'images/SBL1.png'],
        'sbr': ['sbr', 'images/SBR1.png'],
        'tt': ['tt','images/TT1.png'],
        'tbl': ['tbl', 'images/TBL1.png'],
        'tbr': ['tbr', 'images/TBR1.png'],
        'blank': ['blank', 'images/B1.png']
    },
    'position2': {
        'kt': ['kt','images/KT2.png'],
        'kbl': ['kbl', 'images/KBL2.png'],
        'kbr': ['kbr', 'images/KBR2.png'],
        'st': ['st','images/ST2.png'],
        'sbl': ['sbl', 'images/SBL2.png'],
        'sbr': ['sbr', 'images/SBR2.png'],
        'tt': ['tt','images/TT2.png'],
        'tbl': ['tbl', 'images/TBL2.png'],
        'tbr': ['tbr', 'images/TBR2.png'],
        'blank': ['blank', 'images/B2.png']
    },
    'position3': {
        'kt': ['kt','images/KT3.png'],
        'kbl': ['kbl', 'images/KBL3.png'],
        'kbr': ['kbr', 'images/KBR3.png'],
        'st': ['st','images/ST3.png'],
        'sbl': ['sbl', 'images/SBL3.png'],
        'sbr': ['sbr', 'images/SBR3.png'],
        'tt': ['tt','images/TT3.png'],
        'tbl': ['tbl', 'images/TBL3.png'],
        'tbr': ['tbr', 'images/TBR3.png'],
        'blank': ['blank', 'images/B3.png']
    },
    'position4': {
        'kt': ['kt','images/KT4.png'],
        'kbl': ['kbl', 'images/KBL4.png'],
        'kbr': ['kbr', 'images/KBR4.png'],
        'st': ['st','images/ST4.png'],
        'sbl': ['sbl', 'images/SBL4.png'],
        'sbr': ['sbr', 'images/SBR4.png'],
        'tt': ['tt','images/TT4.png'],
        'tbl': ['tbl', 'images/TBL4.png'],
        'tbr': ['tbr', 'images/TBR4.png'],
        'blank': ['blank', 'images/B4.png']
    },
    'position5': {
        'kt': ['kt','images/KT5.png'],
        'kbl': ['kbl', 'images/KBL5.png'],
        'kbr': ['kbr', 'images/KBR5.png'],
        'st': ['st','images/ST5.png'],
        'sbl': ['sbl', 'images/SBL5.png'],
        'sbr': ['sbr', 'images/SBR5.png'],
        'tt': ['tt','images/TT5.png'],
        'tbl': ['tbl', 'images/TBL5.png'],
        'tbr': ['tbr', 'images/TBR5.png'],
        'blank': ['blank', 'images/B5.png']
    }
}

var Slot = function(x,y,slotNum,position,startSprite) {
    this.frames = imageLibrary[position];
    this.sprite = this.frames[startSprite];
    this.spritePiece = this.sprite[0];
    this.spriteRender = this.sprite[1];
    this.x = x;
    this.y = y;
    this.slotNum = slotNum;
}

Slot.prototype.spriteUpdate = function() {
    this.spritePiece = this.sprite[0];
    this.spriteRender = this.sprite[1];
}

Slot.prototype.render = function() {
    ctx.drawImage(Resources.get(this.spriteRender), this.x, this.y);
}

var MasterDisk = function() {
    this.animation = [
        'images/MD0.png',
        'images/MD1.png',
        'images/MD2.png',
        'images/MD3.png',
        'images/MD4.png',
        'images/MD5.png'
    ];

    this.frame = 2;
    this.frameRate = 10;
    this.animate = 0;
    this.halfway = false;
    this.sprite = this.animation[this.frame];
}

MasterDisk.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), 260, 176);
}

MasterDisk.prototype.rotateCounter = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot2.sprite = slot2.frames[slot18.spritePiece];
        slot18.sprite = slot18.frames[slot10.spritePiece];
        slot10.sprite = slot10.frames[slot19.spritePiece];
        slot19.sprite = slot19.frames[slot12.spritePiece];
        slot12.sprite = slot12.frames[slot20.spritePiece];
        slot20.sprite = slot20.frames[slot2.spritePiece];
        slot2.spriteUpdate();
        slot18.spriteUpdate();
        slot10.spriteUpdate();
        slot19.spriteUpdate();
        slot12.spriteUpdate();
        slot20.spriteUpdate();
        if (this.frame === 0) {
            this.frame = 5;
        } else {
            this.frame = this.frame - 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

MasterDisk.prototype.rotateClock = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot2.sprite = slot2.frames[slot20.spritePiece];
        slot18.sprite = slot18.frames[slot2.spritePiece];
        slot10.sprite = slot10.frames[slot18.spritePiece];
        slot19.sprite = slot19.frames[slot10.spritePiece];
        slot12.sprite = slot12.frames[slot19.spritePiece];
        slot20.sprite = slot20.frames[slot12.spritePiece];
        slot2.spriteUpdate();
        slot18.spriteUpdate();
        slot10.spriteUpdate();
        slot19.spriteUpdate();
        slot12.spriteUpdate();
        slot20.spriteUpdate();
        if (this.frame === 5) {
            this.frame = 0;
        } else {
            this.frame = this.frame + 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

var KingDisk = function() {
    this.animation = [
        'images/KD0.png',
        'images/KD1.png',
        'images/KD2.png',
        'images/KD3.png',
        'images/KD4.png',
        'images/KD5.png'
    ];

    this.frame = 4;
    this.frameRate = 10;
    this.animate = 0;
    this.halfway = false;
    this.sprite = this.animation[this.frame];
}

KingDisk.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), 495, 95);
};

KingDisk.prototype.rotateCounter = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot6.sprite = slot6.frames[slot7.spritePiece];
        slot7.sprite = slot7.frames[slot8.spritePiece];
        slot8.sprite = slot8.frames[slot9.spritePiece];
        slot9.sprite = slot9.frames[slot10.spritePiece];
        slot10.sprite = slot10.frames[slot11.spritePiece];
        slot11.sprite = slot11.frames[slot6.spritePiece];
        slot6.spriteUpdate();
        slot7.spriteUpdate();
        slot8.spriteUpdate();
        slot9.spriteUpdate();
        slot10.spriteUpdate();
        slot11.spriteUpdate();
        if (this.frame === 0) {
            this.frame = 5;
        } else {
            this.frame = this.frame - 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

KingDisk.prototype.rotateClock = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot6.sprite = slot6.frames[slot11.spritePiece];
        slot7.sprite = slot7.frames[slot6.spritePiece];
        slot8.sprite = slot8.frames[slot7.spritePiece];
        slot9.sprite = slot9.frames[slot8.spritePiece];
        slot10.sprite = slot10.frames[slot9.spritePiece];
        slot11.sprite = slot11.frames[slot10.spritePiece];
        slot6.spriteUpdate();
        slot7.spriteUpdate();
        slot8.spriteUpdate();
        slot9.spriteUpdate();
        slot10.spriteUpdate();
        slot11.spriteUpdate();
        if (this.frame === 5) {
            this.frame = 0;
        } else {
            this.frame = this.frame + 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

var SnakeDisk = function() {
    this.animation = [
        'images/SD0.png',
        'images/SD1.png',
        'images/SD2.png',
        'images/SD3.png',
        'images/SD4.png',
        'images/SD5.png'
    ];

    this.frame = 0;
    this.frameRate = 10;
    this.animate = 0;
    this.halfway = false;
    this.sprite = this.animation[this.frame];
}

SnakeDisk.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), 295, 441);
};

SnakeDisk.prototype.rotateCounter = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot12.sprite = slot12.frames[slot13.spritePiece];
        slot13.sprite = slot13.frames[slot14.spritePiece];
        slot14.sprite = slot14.frames[slot15.spritePiece];
        slot15.sprite = slot15.frames[slot16.spritePiece];
        slot16.sprite = slot16.frames[slot17.spritePiece];
        slot17.sprite = slot17.frames[slot12.spritePiece];
        slot12.spriteUpdate();
        slot13.spriteUpdate();
        slot14.spriteUpdate();
        slot15.spriteUpdate();
        slot16.spriteUpdate();
        slot17.spriteUpdate();
        if (this.frame === 0) {
            this.frame = 5;
        } else {
            this.frame = this.frame - 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

SnakeDisk.prototype.rotateClock = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot12.sprite = slot12.frames[slot17.spritePiece];
        slot13.sprite = slot13.frames[slot12.spritePiece];
        slot14.sprite = slot14.frames[slot13.spritePiece];
        slot15.sprite = slot15.frames[slot14.spritePiece];
        slot16.sprite = slot16.frames[slot15.spritePiece];
        slot17.sprite = slot17.frames[slot16.spritePiece];
        slot12.spriteUpdate();
        slot13.spriteUpdate();
        slot14.spriteUpdate();
        slot15.spriteUpdate();
        slot16.spriteUpdate();
        slot17.spriteUpdate();
        if (this.frame === 5) {
            this.frame = 0;
        } else {
            this.frame = this.frame + 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

var TreeDisk = function() {
    this.animation = [
        'images/TD0.png',
        'images/TD1.png',
        'images/TD2.png',
        'images/TD3.png',
        'images/TD4.png',
        'images/TD5.png'
    ];

    this.frame = 4;
    this.frameRate = 10;
    this.animate = 0;
    this.halfway = false;
    this.sprite = this.animation[this.frame];
}

TreeDisk.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), 95, 95);
};

TreeDisk.prototype.rotateCounter = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot0.sprite = slot0.frames[slot1.spritePiece];
        slot1.sprite = slot1.frames[slot2.spritePiece];
        slot2.sprite = slot2.frames[slot3.spritePiece];
        slot3.sprite = slot3.frames[slot4.spritePiece];
        slot4.sprite = slot4.frames[slot5.spritePiece];
        slot5.sprite = slot5.frames[slot0.spritePiece];
        slot0.spriteUpdate();
        slot1.spriteUpdate();
        slot2.spriteUpdate();
        slot3.spriteUpdate();
        slot4.spriteUpdate();
        slot5.spriteUpdate();
        if (this.frame === 0) {
            this.frame = 5;
        } else {
            this.frame = this.frame - 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

TreeDisk.prototype.rotateClock = function() {
    this.animate += 1;
    if (this.animate === this.frameRate) {
        this.animate = 0;
        slot0.sprite = slot0.frames[slot5.spritePiece];
        slot1.sprite = slot1.frames[slot0.spritePiece];
        slot2.sprite = slot2.frames[slot1.spritePiece];
        slot3.sprite = slot3.frames[slot2.spritePiece];
        slot4.sprite = slot4.frames[slot3.spritePiece];
        slot5.sprite = slot5.frames[slot4.spritePiece];
        slot0.spriteUpdate();
        slot1.spriteUpdate();
        slot2.spriteUpdate();
        slot3.spriteUpdate();
        slot4.spriteUpdate();
        slot5.spriteUpdate();
        if (this.frame === 5) {
            this.frame = 0;
        } else {
            this.frame = this.frame + 1;
        }
        if (this.halfway) {
            this.halfway = false;
            player.rotating = "off";
        } else {
            this.halfway = true;
        }
    }
    this.sprite = this.animation[this.frame];
};

// Enemies our player must avoid
// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started

//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.animation = [
//         'images/dragon-animation-1.png',
//         'images/dragon-animation-2.png',
//         'images/dragon-animation-3.png',
//         'images/dragon-animation-4.png'
//     ]
//     //this.sprite = 'images/enemy-bug.png';
//     this.randomize();
// };

// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.

//     this.x = this.x + (this.speed * dt);
//     var hitBoxX = [this.x - 77, this.x + 77];
//     var hitBoxY = [this.y - 113, this.y - 53];
//     if ((this.x - this.animate) > this.frameRate) {
//         this.frame = (this.frame + 1) % (this.animation.length);
//         this.sprite = this.animation[this.frame];
//         this.animate += this.frameRate;
//     }
    
//     //collission detection
//     if ((hitBoxX[0] <= player.x && player.x <= hitBoxX[1]) 
//         && (hitBoxY[0] <= player.y && player.y <= hitBoxY[1])) {
//         player.dead = true;
//         // player.x = 202;
//         // player.y = 467;
//     }

//     //enemy wrap-around
//     if (this.x >= 808) {
//         this.randomize();
//     } 
// };

// // Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Enemy.prototype.randomize = function() {
//     this.frame = (Math.floor(Math.random() * 4));
//     this.sprite = this.animation[this.frame];
//     this.frameRate = 15;
//     this.animate = -202;
//     this.x = -202;
//     this.y = (Math.floor((Math.random() * (3 + player.tier)) + 1) * 83) + 143;
//     this.speed = Math.floor((Math.random() * 200) + 100) + player.speedMod;
// }

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // this.animation = ['images/char-boy.png'];
    // for (var i=1; i < 31; i++) {
    //     var newImage = 'images/water-animation/water-';
    //     if (i < 10) {
    //         newImage = newImage + 0;
    //     };
    //     newImage = newImage + i + '.png';
    //     this.animation.push(newImage);
    // };
//    this.animation.push('images/blank.png');
//    this.frame = 0;
//    this.sprite = this.animation[this.frame];
//     this.deathAnimation = [
//         'images/char-boy-d1.png',
//         'images/char-boy-d2.png',
//         'images/char-boy-d3.png',
//         'images/char-boy-d4.png',
//         'images/char-boy-d1.png',
//         'images/char-boy-d1.png',
//         'images/char-boy-d1.png',
//         'images/char-boy-d1.png'
//         ];
//     this.dead = false;
    this.rotating = "off";
  //  this.deathFrameRate = 4;
  //  this.deathFrame = 0;
 //   this.tier = 0;
//    this.tierIncrease = 25;
//    this.x = 303;
 //   this.y = 384;
  //  this.score = 0
 //   this.difficultyMod = 0;
 //   this.maxSpeed = 5;
 //   this.speedMod = 0
 //   this.level = 1;
};

Player.prototype.update = function(dt) {
    if (this.rotating != 'off') {
        if (this.rotating === 'mdrcc') {
            masterDisk.rotateCounter();
        } else if (this.rotating === 'mdrc') {
            masterDisk.rotateClock();
        } else if (this.rotating === 'kdrcc') {
            kingDisk.rotateCounter();
        } else if (this.rotating === 'kdrc') {
            kingDisk.rotateClock();
        } else if (this.rotating === 'sdrcc') {
            snakeDisk.rotateCounter();
        } else if (this.rotating === 'sdrc') {
            snakeDisk.rotateClock();
        } else if (this.rotating === 'tdrcc') {
            treeDisk.rotateCounter();
        } else if (this.rotating === 'tdrc') {
            treeDisk.rotateClock();
        }
    }
    // if (this.dead) {
    //     if (this.frame < this.deathAnimation.length) {
    //         this.sprite = this.deathAnimation[this.frame];
    //         if (this.deathFrame === this.deathFrameRate) {
    //             this.frame += 1;
    //             this.deathFrame = 0;
    //         };
    //         this.deathFrame += 1;
    //         this.x += 3;
    //     } else {
    //         this.dead = false;
    //         this.x = 303;
    //         this.y = 384 + (this.tier * 83);
    //         this.frame = 0;
    //         this.sprite = this.animation[this.frame];
    //     }

    // }
    // if (this.score > this.difficultyMod) {
    //     this.difficultyMod += 1;
    //     this.level += 1;
    //     if (this.difficultyMod % this.maxSpeed != 0) {
    //         this.speedMod += 75;
    //         for (var i = 0; i < allEnemies.length; i++) {
    //             allEnemies[i].speed += 75;
    //         };
    //     } else {
    //         for (var i = 0; i < allEnemies.length; i++) {
    //             allEnemies[i].speed = allEnemies[i].speed - (75 * (this.maxSpeed - 1));
    //         };
    //         this.speedMod = 0;
    //         allEnemies.push(new Enemy);
    //     };
    // };
    // if (this.y === 52) {
    //     if (this.frame === this.animation.length - 1) {
    //         this.score += 1;
    //         if (this.score === (this.tierIncrease * (this.tier + 1)) && (this.tier < 3)) {
    //             this.tier += 1;
    //         }
    //         this.x = 303;
    //         this.y = 384 + (this.tier * 83);
    //         this.frame = 0;
    //         this.sprite = this.animation[this.frame];
    //     } else {
    //         this.frame += 1;
    //         this.sprite = this.animation[this.frame];
    //     };
    // };
}

// Player.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

Player.prototype.handleInput = function(moveCommand) {
    // if (this.y === 52 || this.dead) {
    //     // noop - prevents players from moving while splash animation is played
    // }
    if (this.rotating != 'off') {
        // noop - prevents players from moving while rotating
    }
    else if (moveCommand === 'mdrc') {
        this.rotating = 'mdrc';
    }
    else if (moveCommand === 'mdrcc') {
        this.rotating = 'mdrcc';
    }
    else if (moveCommand === 'kdrc') {
        this.rotating = 'kdrc';
    }
    else if (moveCommand === 'kdrcc') {
        this.rotating = 'kdrcc';
    }
    else if (moveCommand === 'sdrc') {
        this.rotating = 'sdrc';
    }
    else if (moveCommand === 'sdrcc') {
        this.rotating = 'sdrcc';
    }
    else if (moveCommand === 'tdrc') {
        this.rotating = 'tdrc';
    }
    else if (moveCommand === 'tdrcc') {
        this.rotating = 'tdrcc';
    }
    // else if (moveCommand === 'left' && this.x != 0) {
    //     this.x = this.x - 101;
    // }
    // else if (moveCommand === 'up') {
    //     if (this.y === 135) {
    //         this.x = this.x - 35;
    //     };
    //     this.y = this.y - 83;
    // }
    // else if (moveCommand === 'right' && this.x != 606) {
    //     this.x = this.x + 101;
    // }
    // else if (moveCommand === 'down' && this.y != 633) {
    //     this.y = this.y + 83;
    // }
}

// Player.prototype.splash = function() {
//     console.log("splash");
//     for (i = 1; i < this.animation.length; i++) {
//         this.sprite = this.animation[i];
//     }
// }
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

// var allEnemies = [];
// for (var i = 0; i < 1; i++) {
//     allEnemies.push(new Enemy());
// }

var masterDisk = new MasterDisk();
var kingDisk = new KingDisk();
var snakeDisk = new SnakeDisk();
var treeDisk = new TreeDisk();

var allSlots = [];

var slot0 = new Slot(133,101,0,'position0','st');
allSlots.push(slot0);

var slot2 = new Slot(267,193,2,'position2','kbl');
allSlots.push(slot2);

var slot4 = new Slot(102,193,4,'position4','kbr');
allSlots.push(slot4);



var slot1 = new Slot(267,103,1,'position1','blank');
allSlots.push(slot1);

var slot3 = new Slot(133,297,3,'position3','blank');
allSlots.push(slot3);

var slot5 = new Slot(102,103,5,'position5','blank');
allSlots.push(slot5);


var slot6 = new Slot(532,101,6,'position0','tbr');
allSlots.push(slot6);

var slot8 = new Slot(666,193,8,'position2','tbl');
allSlots.push(slot8);

var slot10 = new Slot(501,193,10,'position4','sbl');
allSlots.push(slot10);



var slot7 = new Slot(666,103,7,'position1','blank');
allSlots.push(slot7);

var slot9 = new Slot(532,297,9,'position3','blank');
allSlots.push(slot9);

var slot11 = new Slot(501,103,11,'position5','blank');
allSlots.push(slot11);



var slot12 = new Slot(332,448,12,'position0','sbr');
allSlots.push(slot12);

var slot14 = new Slot(466,540,14,'position2','tt');
allSlots.push(slot14);

var slot16 = new Slot(301,540,16,'position4','kt');
allSlots.push(slot16);



var slot13 = new Slot(466,449,13,'position1','blank');
allSlots.push(slot13);

var slot15 = new Slot(333,643,15,'position3','blank');
allSlots.push(slot15);

var slot17 = new Slot(301,450,17,'position5','blank');
allSlots.push(slot17);



var slot18 = new Slot(333,182,18,'position3','blank');
allSlots.push(slot18);

var slot19 = new Slot(502,334,19,'position5','blank');
allSlots.push(slot19);

var slot20 = new Slot(267,334,20,'position1','blank');
allSlots.push(slot20);



// var Slot = function(x,y,slotNum,position,startSprite) {

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        49: 'mdrcc', // 1
        50: 'mdrc',  // 2
        51: 'tdrcc', // 3
        52: 'tdrc',  // 4
        53: 'kdrcc', // 5
        54: 'kdrc', // 6
        55: 'sdrcc', // 7
        56: 'sdrc', // 8
        // 37: 'left',
        // 38: 'up',
        // 39: 'right',
        // 40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
