import './style.scss';

function Insights() {
  const insights = [
    { value: 3, unit: 'd', legend: 'rest' },
    { value: 365, unit: 'kg', legend: 'average lift' },
    { value: 46.7, unit: 'kg', legend: 'weight' },
  ];

  const items = insights.map((e) => {
    return (
      <div className="insight-box" key={e.legend}>
        <div className="insight-value-group">
          <div className="insight-value">{e.value}</div>
          <div className="insight-unit">{e.unit}</div>
        </div>
        <div className="insight-legend">{e.legend}</div>
      </div>
    );
  });

  return (
    <div className="insights-container">
        {items}
    </div>
  );
}

export default Insights;
