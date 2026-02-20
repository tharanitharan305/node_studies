#!/usr/bin/env node

import * as operation from "./operations/index.js";
console.log('Hello, World!');
const note=process.argv[2];
const ans=operation.count(1,1);
const noteObj={
    content:note,
    id:Date.now()
}
console.log(ans);