import { units as unitsOrigin } from "./setData.js";
import { GET_CAU_HOI, GET_USER } from "../api.js";

const units = JSON.parse(localStorage.getItem("units")) || unitsOrigin;
const unitEl = document.querySelector("#units");

const main = async () => {
  const token = localStorage.getItem("token");

  let infoUser = JSON.parse(sessionStorage.getItem("infoUser")) || {
    email: "",
    password: "",
    quyen: "user",
    tienDo: {
      capDo: "1",
      level: 1,
    },
  };

  sessionStorage.setItem("infoUser", JSON.stringify(infoUser));

  if (token) {
    infoUser = await fetch(`${GET_USER}${token}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  }

  const data = await fetch(GET_CAU_HOI)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  // console.log(infoUser);
  // console.log(data);

  const htmlUnitEl = data
    .map((unit, index) => {
      const levels = unit.level.map((item) => item.chuDe.level);

      const obj = {};
      for (let lvl of levels) {
        obj[lvl] = true;
      }

      const uniqueLevels = Object.keys(obj);
      const count = Object.keys(uniqueLevels).length;

      return `
    <div class="flex flex-col items-center relative">
            <div
              class="animate__animated opacity-0 ob_fadeInLeft relative z-0 shadow-lg rounded-xl p-4 bg-[var(--primary-color)] text-white md:w-[560px] sm:w-[400px] w-[300px] flex justify-between items-center gap-10"
            >
              <div>
                <div
                  class="flex gap-2 items-center text-xl font-bold opacity-90"
                >
                  <i class="fa-solid fa-book" class=""></i>
                  Chủ đề ${index + 1}
                </div>
                <div class="mt-2">${unit.tenChuDe}</div>
              </div>
              <a
                href="./theory.html?unit=${index + 1}"
                class="relative h-12 w-36 rounded-lg flex justify-center items-center gap-2 border-2 border-[var(--thir-color)] px-3 hover:scale-105 transition-all cursor-pointer"
              >
                <i class="fa-solid fa-chalkboard-teacher"></i>
                Lý thuyết
              </a>
            </div>

            <div class="py-10 relative">
              ${uniqueLevels
                .map((lev, indexLevel) => {
                  return `
                    ${
                      indexLevel % 2 === 0
                        ? `
                          <div class="w-20 ml-[-32px]">
                            <a href="./test/index.html?unit=${
                              index + 1
                            }&level=${indexLevel + 1}" ${
                            !(parseInt(infoUser.tienDo.capDo, 10) >= index + 1)
                              ? // lev.state === "lock"
                                'style="pointer-events: none;"'
                              : parseInt(infoUser.tienDo.capDo, 10) ==
                                  index + 1 &&
                                infoUser.tienDo.level < indexLevel + 1
                              ? 'style="pointer-events: none;"'
                              : ""
                          }>
                              <img
                                class="w-full animate__animated opacity-0 ob_zoomIn"
                                src="../public/assets/img/${
                                  parseInt(infoUser.tienDo.capDo, 10) >
                                  index + 1
                                    ? "star.png"
                                    : infoUser.tienDo.level >= indexLevel + 1 &&
                                      parseInt(infoUser.tienDo.capDo, 10) ===
                                        index + 1
                                    ? "star.png"
                                    : "black_star.png"
                                }"
                                alt="star"
                              />
                            </a>
                          </div>
                          ${
                            indexLevel + 1 != uniqueLevels.length
                              ? `
                            <div class="w-32 rotate-12">
                              <img
                                class="w-full animate__animated opacity-0 ob_zoomIn"
                                src="../public/assets/img/black_path.png"
                                alt="black_path"
                              />
                            </div>
                            `
                              : ``
                          }
                        `
                        : `
                          <div class="w-20 ml-[32px]">
                            <a href="./test/index.html?unit=${
                              index + 1
                            }&level=${indexLevel + 1}" ${
                            !(parseInt(infoUser.tienDo.capDo, 10) >= index + 1)
                              ? // lev.state === "lock"
                                'style="pointer-events: none;"'
                              : parseInt(infoUser.tienDo.capDo, 10) ==
                                  index + 1 &&
                                infoUser.tienDo.level < indexLevel + 1
                              ? 'style="pointer-events: none;"'
                              : ""
                          }>
                              <img
                                class="w-full animate__animated opacity-0 ob_zoomIn"
                                src="../public/assets/img/${
                                  parseInt(infoUser.tienDo.capDo, 10) >
                                  index + 1
                                    ? "star.png"
                                    : infoUser.tienDo.level >= indexLevel + 1 &&
                                      parseInt(infoUser.tienDo.capDo, 10) ===
                                        index + 1
                                    ? "star.png"
                                    : "black_star.png"
                                }"
                                alt="star"
                              />
                            </a>
                          </div>
                          ${
                            indexLevel + 1 != uniqueLevels.length
                              ? `
                              <div class="w-32 -scale-x-100 ml-[-30px] rotate-[-5deg]">
                                <a href="./test/index.html?unit=${
                                  index + 1
                                }&level=${indexLevel + 1}" ${
                                  !(
                                    parseInt(infoUser.tienDo.capDo, 10) >=
                                    index + 1
                                  )
                                    ? // lev.state === "lock"
                                      'style="pointer-events: none;"'
                                    : parseInt(infoUser.tienDo.capDo, 10) ==
                                        index + 1 &&
                                      infoUser.tienDo.level < indexLevel + 1
                                    ? 'style="pointer-events: none;"'
                                    : ""
                                }>
                                  <img
                                    class="w-full animate__animated ob_zoomIn"
                                    src="../public/assets/img/black_path.png"
                                    alt="black_path"
                                  />
                                </a>
                              </div>
                            `
                              : ``
                          }
                        `
                    }
                  `;
                })
                .join("")}
            </div>
            <div class="animate__animated opacity-0 ob_bounceIn w-16 cursor-pointer absolute sm:right-10 right-3 bottom-10 shadow-lg ">            
              <div
                class="animate__animated animate__pulse animate__infinite"
              >
                <img
                  class="w-full"
                  src="../public/assets/img/box.svg"
                  alt="ruong"
                />
              </div>
            </div>
          </div>
  `;
    })
    .join("");

  if (unitEl) unitEl.innerHTML = htmlUnitEl;
};

main();

// const isLogin = localStorage.getItem("token");
// if (isLogin) {
//   main();
// } else {
// }

export const nextLevel = (a, b) => {
  const unit = a - 1; // 0
  const level = b - 1; // 2
  if (level === units[unit].levels.length) {
    units[unit + 1].levels[0].state = "unlock";
  } else {
    units[unit].levels[level].state = "unlock";
  }

  localStorage.setItem("units", JSON.stringify(units));
  console.log(units);
};
