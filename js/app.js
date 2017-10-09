
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

function rotateDisk(disk, clockwise, slotList) {
    disk.animate += 1;
    if (disk.animate === disk.frameRate) {
        disk.animate = 0;
        if (clockwise) {
            rotateMod = -1;
        } else {
            rotateMod = 1;
        };
        for (var i = 0; i < slotList.length; i++) {
            if (i + rotateMod < 0) {
                newSlot = slotList.length - 1;
            } else if(i + rotateMod === slotList.length) {
                newSlot = 0;
            } else {
                newSlot = i + rotateMod;
            }
            slotList[i].sprite = slotList[i].frames[slotList[newSlot].spritePiece];
        }
        for (var i = 0; i < slotList.length; i++) {
            slotList[i].spriteUpdate();
        }
        if(clockwise) {
            disk.frame = disk.frame + 1;
            if (disk.frame === 6) {
                disk.frame = 0;
            }
        } else {
            disk.frame = disk.frame - 1;
            if (disk.frame === -1) {
                disk.frame = 5;
            }
        }
        if (disk.halfway) {
            disk.halfway = false;
            player.rotating = "off";
        } else {
            disk.halfway = true;
        }
    }
    disk.sprite = disk.animation[disk.frame];
};


function checkWin() {
    if(masterDisk.frame === 0) {
        if (kingDisk.frame === 0) {
            if (snakeDisk.frame === 0) {
                if (treeDisk.frame === 0) {
                    if (slot0.spritePiece === 'tt') {
                        if (slot2.spritePiece === 'tbr') {
                            if (slot4.spritePiece === 'tbl') {
                                if (slot6.spritePiece === 'kt') {
                                    if (slot8.spritePiece === 'kbr') {
                                        if (slot10.spritePiece === 'kbl') {
                                            if (slot12.spritePiece === 'st') {
                                                if (slot14.spritePiece === 'sbr') {
                                                    if (slot16.spritePiece === 'sbl') {
                                                        player.win = true;
                                                    }
                                                } 
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } 

}
//build prototypes

//slot prototype
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


//masterDisk prototype
var MasterDisk = function() {
    buildDiskAnimation('md', this);

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
    rotateDisk(this, false, this.slotList);
}

MasterDisk.prototype.rotateClock = function() {
    rotateDisk(this, true, this.slotList);
}


//kingDisk prototype
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
}

KingDisk.prototype.rotateCounter = function() {
    rotateDisk(this, false, this.slotList);
}

KingDisk.prototype.rotateClock = function() {
    rotateDisk(this, true, this.slotList);
}


//snakeDisk prototype
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
}

SnakeDisk.prototype.rotateCounter = function() {
    rotateDisk(this, false, this.slotList);
}

SnakeDisk.prototype.rotateClock = function() {
    rotateDisk(this, true, this.slotList);
}


//treeDisk prototype
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
}

TreeDisk.prototype.rotateCounter = function() {
    rotateDisk(this, false, this.slotList);
}

TreeDisk.prototype.rotateClock = function() {
    rotateDisk(this, true, this.slotList);
}


//player prototype
var Player = function() {
    this.rotating = "off";
    this.win = false;
    this.animation = ['images/victory0.png','images/victory1.png',
                      'images/victory2.png','images/victory3.png'];
    this.frame = 0;
    this.frameRate = 25;
    this.animate = 0;
    this.sprite = this.animation[this.frame];
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), 0, 0);
}

Player.prototype.update = function(dt) {
    if(this.win) {
        if (this.frame != 3) {
            this.animate += 1;
            console.log(this.animate);
            console.log(this.frameRate);
            if (this.animate === this.frameRate) {
                this.frame += 1;
                this.sprite = this.animation[this.frame];
                this.animate = 0;
            }
        }
    } else {
        checkWin();
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

masterDisk.slotList = [slot2, slot18, slot10, slot19, slot12, slot20];
kingDisk.slotList = [slot6, slot7, slot8, slot9, slot10, slot11];
snakeDisk.slotList = [slot12, slot13, slot14, slot15, slot16, slot17];
treeDisk.slotList = [slot0, slot1, slot2, slot3, slot4, slot5];

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
