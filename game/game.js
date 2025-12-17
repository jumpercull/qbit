const qs = [
  { q: "2 + 2?", a: ["3", "4", "5", "6"], c: 1 },
  { q: "JS runs in?", a: ["Python", "Browser", "C++", "OS"], c: 1 }
];

let i = 0;
let score = 0;

function load() {
  if (i >= qs.length) {
    finish();
    return;
  }

  question.textContent = qs[i].q;
  answers.innerHTML = "";

  qs[i].a.forEach((t, idx) => {
    const b = document.createElement("button");
    b.textContent = t;
    b.onclick = () => {
      if (idx === qs[i].c) score += 5;
      i++;
      load();
    };
    answers.appendChild(b);
  });
}

function finish() {
  const user = JSON.parse(localStorage.getItem("qbits_user"));
  user.coins += score;
  localStorage.setItem("qbits_user", JSON.stringify(user));
  document.body.innerHTML = `<h1>Game Over</h1><p>+${score} coins!</p>
  <a href="../dashboard.html">Back</a>`;
}

load();
