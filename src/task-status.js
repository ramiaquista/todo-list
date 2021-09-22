class Status {
  static boxNotMarked(box) {
    if (box.id === 'unmarked') {
      return true;
    }
    return false;
  }
}

module.exports = Status;
