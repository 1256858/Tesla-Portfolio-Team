 export default function Timeline() {
  const events = [
    {
      id: 1,
      year: "1856",
      title: "Birth of Nikola Tesla",
      description: " he was born in Smiljan.",
    },
    {
      id: 2,
      year: "1884",
      title: "Moved to America",
      description: "Tesla moved to the United States to pursue his ideas which are The Tesla coil Wireless , power experiments , Radio technology and Remote control ",
    },
    {
      id: 3,
      year: "1891",
      title: "Tesla Coil",
      description: "A Tesla coil is a resonant transformer that generates extremely high-voltage, high-frequency AC electricity, producing dramatic electrical discharges.",
    },
    {
      id: 4,
      year: "1943",
      title: "The End of an Era",
      description: "Nikola Tesla died in New York City after he made abrilliant inventions and wrote his own history for good.",
    },
  ];

  return (
    <section className="timeline-section" id="timeline">
      <h2 className="section-title">
        LIFE <span>TIMELINE</span>
      </h2>

      <div className="timeline">
        {events.map((event) => (
          <div className="timeline-item" key={event.id}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default Timeline(); 
  