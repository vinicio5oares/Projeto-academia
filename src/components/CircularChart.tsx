interface CircularChartProps {
  value: number;
}

export default function CircularChart({ value }: CircularChartProps) {
  const radius = 85; // ⬆ maior
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg viewBox="0 0 240 240" width="200" height="200">
      {/* Círculo de fundo */}
      <circle
        cx="120"
        cy="120"
        r={radius}
        stroke="#2b3f66"
        strokeWidth="20"
        fill="none"
      />

      {/* Círculo de progresso */}
      <circle
        cx="120"
        cy="120"
        r={radius}
        stroke="#a7e800"
        strokeWidth="27"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />

      {/* Texto central */}
      <text
        x="120"
        y="132"
        textAnchor="middle"
        fontSize="28"   // ⬆ texto maior
        fill="#ffffff"
        fontWeight="bold"
      >
        {value}%
      </text>
    </svg>
  );
}
