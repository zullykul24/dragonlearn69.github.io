

describe("Cộng điểm", function () {
  function Game() {
    this.point = 0;
    this.pos = 0;
    this.addPoint = function () {

      var id = setInterval(frame, 5);
      function frame() {
        if (this.pos == 360) {
          clearInterval(id);
        } else {
          this.pos++;
        }
      }
      this.point++;
      this.pos = 0;
    }
  }

  it("Tăng 1 điểm", function () {
    var n = new Game();
    n.addPoint();
    expect(n.point).toBe(1);
  });
  it("Tăng 5 điểm", function () {
    var n = new Game();
    for (var i = 0; i < 5; i++)n.addPoint();
    expect(n.point).toBe(5);
  });

});
describe("Trừ điểm với điểm ban đầu là 5", function () {
  function Game() {
    this.point = 5;
    this.pos = 0;
    this.subPoint = function () {

      var id = setInterval(frame, 5);
      function frame() {
        if (pos == 0) {
          clearInterval(id);
        } else {
          ele.style.left = this.pos + "px";
          pos--;
        }
      }
      this.point--;
      this.pos = 360;
    }
  }

  it("Giảm 1 điểm", function () {
    var n = new Game();
    n.subPoint();
    expect(n.point).toBe(4);
  });
  it("Tăng 3 điểm", function () {
    var n = new Game();
    for (var i = 0; i < 3; i++)n.subPoint();
    expect(n.point).toBe(2);
  });

});
describe("Hàm kiểm tra đáp án", function () {
  function Game() {
    this.numbers1_arr = ["359", "826", "274", "618", "487"];
    this.check = function (number, index) {
      this.input = this.numbers1_arr[index];
      if (this.input == number) return true;
      else return false;
    }
  }
  it("Kiểm tra đầu vào đầu tiên", function () {
    var n = new Game();
    expect(n.check(359, 0)).toBe(true);
  })
  it("Kiểm tra đầu vào thứ 2", function () {
    var n = new Game();
    expect(n.check(359, 1)).toBe(false);
  })
})
