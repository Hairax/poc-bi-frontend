import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

interface MetricsData {
  totalMaintenances: number;
  completedMaintenances: number;
  pendingMaintenances: number;
  inProgressMaintenances: number;
  completedPercentage: number;
  pendingPercentage: number;
  averageCost: number;
  maintenancesByMonth: { month: string; count: number }[];
  usageMaintenanceRatio: number;
  failureTrends: { scheduledDate: string; failures: number }[];
  predictiveFailures: { scheduledDate: string; predictedFailures: number }[];
  mtbf: number;
  mttr: number;
}

const MetricsDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/maintenance/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Error fetching metrics:", err));
  }, []);

  if (!metrics) {
    return <p>Cargando métricas...</p>;
  }

  const maintenanceData = [
    { name: "Completados", value: metrics.completedMaintenances },
    { name: "Pendientes", value: metrics.pendingMaintenances },
    { name: "En Progreso", value: metrics.inProgressMaintenances },
  ];

  const radarData = [
    { metric: "MTBF", value: metrics.mtbf },
    { metric: "MTTR", value: metrics.mttr },
    { metric: "Uso/Mant.", value: metrics.usageMaintenanceRatio },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2>Métricas de Mantenimiento</h2>

      {/* Gráfico de Barras - Mantenimientos por Estado */}
      <h3>Mantenimientos por Estado</h3>
      <p>
        Este gráfico muestra la cantidad de mantenimientos completados, en
        progreso y pendientes. Es crucial para evaluar la eficiencia de las
        operaciones y la acumulación de tareas pendientes.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={maintenanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico de Líneas - Mantenimientos por Mes */}
      <h3>Mantenimientos por Mes</h3>
      <p>
        Representa la distribución de mantenimientos programados por mes.
        Permite identificar tendencias y prever cargas de trabajo.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={metrics.maintenancesByMonth}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Radar Chart para MTBF, MTTR y Uso/Mant. */}
      <h3>Indicadores Clave</h3>
      <p>
        El MTBF (Tiempo Medio entre Fallos) y el MTTR (Tiempo Medio de
        Reparación) son métricas esenciales para evaluar la confiabilidad y
        disponibilidad de los activos, alineándose con la norma NB 12017:2020.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis />
          <Radar name="Indicadores" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

      {/* Análisis y toma de decisiones */}
      <h3>Toma de Decisiones</h3>
      <p>
        Con base en estas métricas, se pueden tomar decisiones estratégicas
        como:
      </p>
      <ul>
        <li>
          Si el <strong>MTBF es bajo</strong>, se recomienda aumentar la
          frecuencia de mantenimiento preventivo.
        </li>
        <li>
          Un <strong>MTTR alto</strong> sugiere tiempos de reparación
          prolongados, afectando la disponibilidad de los activos.
        </li>
        <li>
          El análisis de <strong>fallas predictivas</strong> permite anticiparse
          a problemas antes de que ocurran.
        </li>
        <li>
          Un <strong>alto costo promedio</strong> de mantenimiento puede
          indicar la necesidad de optimizar procesos o adquirir repuestos
          estratégicamente.
        </li>
      </ul>
    </div>
  );
};

export default MetricsDashboard;
