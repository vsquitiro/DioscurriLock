
var imageLibrary = {};

var slotPrefix = ['kt','kbl','kbr','st','sbl','sbr','tt','tbl','tbr','blank'];

function buildLibrary(library, keyList, position) {
    positionKey = 'position' + position;
    library[positionKey] = {}
    for(var i = 0; i < keyList.length; i++) {
        library[positionKey][keyList[i]] = [keyList[i],'images/' + keyList[i] + position + '.png'];
    }
}

for(var i = 0; i < 6; i++) {
    buildLibrary(imageLibrary, slotPrefix, i);
}

function buildDiskAnimation(diskPrefix, disk) {
    disk.animation = []
    for(var i = 0; i < 6; i++) {
        disk.animation.push('images/' + diskPrefix + i + '.png');
    }
}

// function rotateDisk(disk, clockwise, slotList) {
//     disk.animate += 1;
//     if (disk.animate === disk.frameRate) {
//         disk.animate = 0;
//         if (clockwise) {
//             rotateMod = -1;
//         } else {
//             rotateMod = 1;
//         };
//         for (var i = 0; i < slotList.length; i++) {
//             if (i + rotateMod < 0) {
//                 newSlot = slotList.length - 1;
//             } else if(i + rotateMod === slotList.length) {
//                 newSlot = 0;
//             } else {
//                 newSlot = i + rotateMod;
//             }
//             slotList[i].sprite = slotList[i].frames[slotList[newSlot].spritePiece];
//         }
//         for (var i = 0; i < slotList.length; i++) {
//             slotList[i].spriteUpdate();
//         }
//         if(clockwise) {
//             disk.frame = disk.frame + 1;
//             if (disk.frame === 6) {
//                 disk.frame = 0;
//             }
//         } else {
//             disk.frame = disk.frame - 1;
//             if (disk.frame === -1) {
//                 disk.frame = 5;
//             }
//         }
//         if (disk.halfway) {
//             disk.halfway = false;
//             player.rotating = "off";
//         } else {
//             disk.halfway = true;
//         }
//     }
//     disk.sprite = disk.animation[disk.frame];
// };

// MasterDisk.prototype.rotateCounter = function() {
//     this.animate += 1;
//     if (this.animate === this.frameRate) {
//         this.animate = 0;
//         slot2.sprite = slot2.frames[slot18.spritePiece];
//         slot18.sprite = slot18.frames[slot10.spritePiece];
//         slot10.sprite = slot10.frames[slot19.spritePiece];
//         slot19.sprite = slot19.frames[slot12.spritePiece];
//         slot12.sprite = slot12.frames[slot20.spritePiece];
//         slot20.sprite = slot20.frames[slot2.spritePiece];
//         slot2.spriteUpdate();
//         slot18.spriteUpdate();
//         slot10.spriteUpdate();
//         slot19.spriteUpdate();
//         slot12.spriteUpdate();
//         slot20.spriteUpdate();
//         if (this.frame === 0) {
//             this.frame = 5;
//         } else {
//             this.frame = this.frame - 1;
//         }
//         if (this.halfway) {
//             this.halfway = false;
//             player.rotating = "off";
//         } else {
//             this.halfway = true;
//         }
//     }
//     this.sprite = this.animation[this.frame];
// };


//build prototypes
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
    buildDiskAnimation('md', this);

    this.frame = 2;
    this.frameRate = 100;
    this.animate = 0;
    this.halfway = false;
    this.sprite = this.animation[this.frame];
}

MasterDisk.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), 260, 176);
}

// MasterDisk.prototype.rotateCounter = function()  {
//     slotList = [slot2, slot18, slot10, slot19, slot12, slot20]
//     rotateDisk(this, false, slotList);
// }

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
    buildDiskAnimation('kd', this);
    
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
    buildDiskAnimation('sd', this);
    
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
    buildDiskAnimation('td', this);
    
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

var Player = function() {
    this.rotating = "off";
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
}

Player.prototype.handleInput = function(moveCommand) {
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
}

var player = new Player();

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
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
