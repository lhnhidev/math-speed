import { data } from "./data/index.js";
import { unit, level } from "./displayAns.js";
import { nextLevel } from "../displayUnits.js";

const submitButton = document.querySelector("#submitButton");
const comfirmSubmit = document.querySelector("#comfirmSubmit");
const markBox = document.querySelector("#markBox");

const handleSubmit = () => {
  if (localStorage.getItem("submit") == "true") {
    const que = data[`unit${unit}`][`level${level}`];

    alert(`Điểm ${mark}/${que.length}`);
    return;
  }
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

    que.forEach((el, index) => {
      const answer = el.answers;
      let trueA = null;
      answer.forEach((aEl) => {
        if (aEl.type == true) {
          trueA = aEl.index;
        }
        const trueAs = document.querySelectorAll(`[index="${trueA}"]`);

        if ([...trueAs][index]?.className != undefined) {
          if (![...trueAs][index]?.className.includes("active")) {
            [...trueAs][index].classList.add("border-blue-500", "bg-blue-200");
          }
        }
        // if ()
      });
    });

    if (answers.length === 0) {
      if (window.matchMedia("(max-width: 640px)").matches) {
        alert(`Điểm 0/${que.length}`);
      } else {
        markBox.innerHTML = `
          <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
            Điểm: 0/${que.length}
          </h2>
          <p>Chúc mừng bạn đã hoàn thành xuất sắc bài thi của mình!</p>
        `;
      }
      localStorage.setItem("submit", true);
      return;
    }

    answers.forEach((ans, index) => {
      que[index].answers.forEach((item) => {
        if (item.index == ans.index && item.type == true) ++mark;
      });
    });

    if (window.matchMedia("(max-width: 640px)").matches) {
      alert(`Điểm ${mark}/${que.length}`);
    } else {
      markBox.innerHTML = `
        <h2 class="text-4xl mb-2 font-bold text-[var(--primary-color)]">
          Điểm: ${mark}/${que.length}
        </h2>
        <p>Chúc mừng bạn đã hoàn thành xuất sắc bài thi của mình!</p>
      `;
    }
    localStorage.setItem("submit", true);

    if (mark >= Math.floor(0.7 * que.length)) {
      console.log(Number(unit), Number(level) + 1);
      nextLevel(Number(unit), Number(level) + 1);
    }
  });
};

let mark = 0;
submitButton.addEventListener("click", () => {
  handleSubmit();
});

document.querySelector("#submit2").addEventListener("click", () => {
  handleSubmit();
});

export const getMark = () => {
  return mark;
};
