import { data } from "./data/index.js";
import { unit, level } from "./displayAns.js";
import { nextLevel } from "../displayUnits.js";

const submitButton = document.querySelector("#submitButton");
const comfirmSubmit = document.querySelector("#comfirmSubmit");
const markBox = document.querySelector("#markBox");

let mark = 0;
submitButton.addEventListener("click", () => {
  comfirmSubmit.classList.toggle("hidden");
  comfirmSubmit.classList.toggle("flex");

  document.querySelector("#comfirmButton").addEventListener("click", () => {
    document
      .querySelectorAll(".class-ex")
      .forEach((item) => item.classList.remove("hidden"));

    submitButton.classList.toggle("hidden");
    comfirmSubmit.classList.toggle("hidden");

    const answers = [...document.querySelectorAll(".active")].map((ans) => {
      return {
        question: ans.getAttribute("question"),
        index: ans.getAttribute("index"),
      };
    });

    const que = data[`unit${unit}`][`level${level}`];
    if (answers.length === 0) {
      markBox.innerHTML = `
        <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
          Điểm: 0/${que.length}
        </h2>
        <p>Chúc mừng bạn đã hoàn thành xuất sắc bài thi của mình!</p>
      `;
      return;
    }

    answers.forEach((ans, index) => {
      que[index].answers.forEach((item) => {
        if (item.index == ans.index && item.type == true) ++mark;
      });

      markBox.innerHTML = `
        <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
          Điểm: ${mark}/${que.length}
        </h2>
        <p>Chúc mừng bạn đã hoàn thành xuất sắc bài thi của mình!</p>
      `;
    });

    console.log(que.length);
    if (mark >= Math.floor(0.7 * que.length)) {
      console.log(Number(unit), Number(level) + 1);
      nextLevel(Number(unit), Number(level) + 1);
    }
  });
});

export const getMark = () => {
  return mark;
};
