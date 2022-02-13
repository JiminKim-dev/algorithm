// time-conversion
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function timeConversion(s) {
  const time = s.replace(/[A-Z]/g, '').split(':');
  let [hh, mm, ss] = time;

  if (s.slice(-2) === 'PM' ) {
    hh === '12' ? hh = 12 : hh = Number(hh) + 12;
  } else {
    hh === '12' ? hh = '00' : hh;
  }

  return [hh, mm, ss].join(':');
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const s = readLine();

  const result = timeConversion(s);
  
  ws.write(result + '\n');
  ws.end();
}
