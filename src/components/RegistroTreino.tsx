

  {/* Calculo dos dias consecutivos  */}

function registrarTreino() {
  const hoje = new Date().toISOString().split("T")[0];
  const dias = JSON.parse(localStorage.getItem("diasTreino") || "[]");

  if (!dias.includes(hoje)) {
    dias.push(hoje);
    localStorage.setItem("diasTreino", JSON.stringify(dias));
  }
}

function calcularStreak() {
  const dias = JSON.parse(localStorage.getItem("diasTreino") || "[]").sort();

  if (dias.length === 0) return 0;

  let streak = 1;

  for (let i = dias.length - 1; i > 0; i--) {
    const atual = new Date(dias[i]);
    const anterior = new Date(dias[i - 1]);

    const diff =
      (atual.getTime() - anterior.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak++;
    else break;
  }

  return streak;
}

export default calcularStreak
