import { units } from "./setData.js";

const unitEl = document.querySelector("#units");

const htmlUnitEl = units
  .map((unit, index) => {
    return `
    <div class="flex flex-col items-center relative">
            <div
              class="relative z-0 shadow-lg rounded-xl p-4 bg-[var(--primary-color)] text-white w-[560px] flex justify-between items-center gap-10"
            >
              <div>
                <div
                  class="flex gap-2 items-center text-xl font-bold opacity-90"
                >
                  <i class="fa-solid fa-book" class=""></i>
                  Chủ đề ${unit.id}
                </div>
                <div class="mt-2">${unit.name}</div>
              </div>
              <div
                class="relative h-12 w-36 rounded-lg flex justify-center items-center gap-2 border-2 border-[var(--thir-color)] px-3 hover:scale-105 transition-all cursor-pointer"
              >
                <i class="fa-solid fa-chalkboard-teacher"></i>
                Lý thuyết
              </div>
            </div>

            <div class="py-10 relative">
              ${unit.levels
                .map((level, indexLevel) => {
                  return `
                    ${
                      indexLevel % 2 === 0
                        ? `
                          <div class="w-20 ml-[-32px]">
                            <img
                              class="w-full"
                              src="../public/assets/img/${
                                level.state === "unlock"
                                  ? "star.png"
                                  : "black_star.png"
                              }"
                              alt="star"
                            />
                          </div>
                          ${
                            indexLevel + 1 != unit.levels.length
                              ? `
                            <div class="w-32 rotate-12">
                              <img
                                class="w-full"
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
                            <img
                              class="w-full"
                              src="../public/assets/img/${
                                level.state === "unlock"
                                  ? "star.png"
                                  : "black_star.png"
                              }"
                              alt="star"
                            />
                          </div>
                          ${
                            indexLevel + 1 != unit.levels.length
                              ? `
                              <div class="w-32 -scale-x-100 ml-[-30px] rotate-[-5deg]">
                                <img
                                  class="w-full"
                                  src="../public/assets/img/black_path.png"
                                  alt="black_path"
                                />
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
            <div
              class="w-16 cursor-pointer absolute right-10 bottom-10 shadow-lg animate__animated animate__pulse animate__infinite"
            >
              <img
                class="w-full"
                src="../public/assets/img/box.svg"
                alt="ruong"
              />
            </div>
          </div>
  `;
  })
  .join("");

unitEl.innerHTML = htmlUnitEl;
