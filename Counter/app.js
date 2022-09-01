let count = 0;

const buttons = document.querySelectorAll(".btn");
const result = document.querySelector("#count-result");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("incr")) {
      count++;
    } else if (styles.contains("decr")) {
      count--;
    } else {
      count = 0;
    }
    if (count < 0) {
      result.style.color = "rgb(255, 0, 43)";
    }
    if (count == 0) {
      result.style.color = "white";
    }
    if (count > 0) {
      result.style.color = "rgb(0, 255, 64)";
    }
    result.textContent = count;
  });
});
