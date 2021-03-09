function printer(line) {
  console.log(line);
};

// Controls the printer by feeding it one line to print at a time
function spooler(lines) {
  lines.forEach((line) => printer(line));
};


module.exports = {
  printer,
  spooler
};

