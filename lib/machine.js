
function Machine(sp) {
  this.sp = sp;
}

Machine.prototype = {
  sp : null,
  move : function(coords) {
    var parts = [];

    Object.keys(coords).forEach(function(key) {
      parts.push(key + coords[key]);
    });

    this.sp && this.sp.write('G1 ' + parts.join(' '));
  }
};

module.exports = Machine;
