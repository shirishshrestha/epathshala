import { Card } from "@/components/ui/card";

function MetricCard({ value, label, icon, color }) {
  return (
    <Card className="p-6 bg-secondary relative w-full overflow-hidden">
      <div className="flex items-start justify-between text-foreground">
        <div>
          <h3 className="text-3xl font-bold mb-1">{value}</h3>
          <p className="">{label}</p>
        </div>
        <div className={`${color} p-3 rounded-full`}>{icon}</div>
      </div>
    </Card>
  );
}

export default function MetricsComp({ metrics }) {
  return (
    <>
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          value={metric.value}
          label={metric.label}
          icon={metric.icon}
          color={metric.color}
        />
      ))}
    </>
  );
}
