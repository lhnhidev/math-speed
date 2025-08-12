import { getTime } from "./getTime.js";

const startBtn = document.querySelector("#startExamBtn");

const submitData = () => {
  if (getTime() === null) {
    const notyf = new Notyf();
    notyf.error("Vui lòng chọn thời gian làm bài thi");
    return;
  }
  window.location.href = `contest/index.html?time=${encodeURIComponent(
    getTime()
  )}`;
};

startBtn.addEventListener("click", () => {
  submitData();
});

// const openHistoryExam = (index) => {
//   const targetUrl = `history-exams/index.html?index=${encodeURIComponent(
//     index
//   )}`;
//   window.location.href = targetUrl;
// };

// const renderHistoryExams = () => {
//   let exams = JSON.parse(localStorage.getItem("history_exams")) || [];
//   console.log(exams);
//   let html = "";
//   exams.reverse().forEach((exam, index) => {
//     let name = exam.name;
//     html += `
//             <div class="exam-container">
//                 <div class="exam-name">${name}</div>
//                 <div class="delete-exam">Delete</div>
//                 <div class="access-exam">Xem lại</div>
//             </div>
//         `;
//   });

//   if (!html) html = `<div class="empty-list">Trống</div>`;

//   document.querySelector(".storage-exams").innerHTML = html;

//   document.querySelectorAll(".delete-exam").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       exams.splice(index, 1);
//       localStorage.setItem("history_exams", JSON.stringify(exams));
//       renderHistoryExams();
//     });
//   });

//   document.querySelectorAll(".access-exam").forEach((btn, index, arr) => {
//     btn.addEventListener("click", () => {
//       openHistoryExam(exams.length - index - 1);
//     });
//   });
// };

// renderHistoryExams();
