function Inventions() {
  const inventions = [
    {
      id: 1,
      icon: "⚡",
      title: "Alternating Current",
      description:
        "Tesla helped develop the AC electrical system used to deliver electricity around the world.",
    },
    {
      id: 2,
      icon: "🔌",
      title: "Tesla Coil",
      description:
        "A revolutionary electrical device capable of producing high-voltage electricity.",
    },
    {
      id: 3,
      icon: "📡",
      title: "Wireless Technology",
      description:
        "Tesla experimented with wireless communication and the transmission of electrical energy.",
    },
  ];

  return (
    <section className="inventions" id="inventions">
      <h2 className="section-title">
        HIS <span>INVENTIONS</span>
      </h2>

      <div className="inventions-container">
        {inventions.map((invention) => (
          <div className="invention-card" key={invention.id}>
            <div className="invention-icon">{invention.icon}</div>
            <h3>{invention.title}</h3>
            <p>{invention.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inventions;