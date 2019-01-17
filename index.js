exports.dev = true;

exports.log = function() {
  if (this.dev) {
    let args = arguments;
    if (args.length === 1) {
      console.log(args[0]);
    } else {
      for (let i = 0; i < args.length; i++) {
        console.log("arg" + (i + 1) + " -> " + args[i]);
      }
    }
  }
};
