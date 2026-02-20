#!/usr/bin/env node
console.log('Hello, World!');
const note=process.argv[2];
const noteObj={
    content:note,
    id:Date.now()
}
console.log(noteObj);