/*
  The job of a 3d resin printer is quite simple:

  for horizontal slices in 3d object
    display slice
    wait
    blank display
    drive stepper motor to raise platform

  configurables:
   slice height
   cure speed

*/

var Machine = require('../machine');
var util = requir('util');

function ResinPrinter() {
  Machine.apply(this, arguments);
}

util.inherits(ResinPrinter, Machine);