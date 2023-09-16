"use strict";
/** @format */
// Basic Data Types in typescript
let num = 69;
let username = 'moayaan.eth';
let isRight = true;
let x = 'Ayaan';
// Array in typescript
let arr = [1, 'ayaan', true];
let ids = [1, 2, 3, 4, 5];
// Tuple in typescript
let tupleExample = ['ayaan', true, 1];
// Tuple Array in typescript
let tupleArrayExample = [
    [1, 'ayaan'],
    [2, 'rehan'],
    [3, 'saud'],
];
// Union
let uniqueIds = 22;
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["East"] = 3] = "East";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
var Cursor;
(function (Cursor) {
    Cursor["Up"] = "Up";
    Cursor["Down"] = "down";
    Cursor["Left"] = "left";
    Cursor["Right"] = "right";
})(Cursor || (Cursor = {}));
console.log(Direction.North);
