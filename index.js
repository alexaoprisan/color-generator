import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script

const colorName = argv[2];

const colorLuminosity = argv[3];

const color = randomColor({
  luminosity: colorLuminosity,
  hue: colorName,
}); // a hex code for an attractive color

console.log(
  chalk.hex(color)(`
    ###############################
    ###############################
    ###############################
    #####                     #####
    #####       ${color}       #####
    #####                     #####
    ###############################
    ###############################
    ###############################`),
);
