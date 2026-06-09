import Card from "./Card";

const domains = [
  {
    title: "Criminal Litigation",
    description:
      "Specializing in white-collar offenses, complex investigations, and appellate challenges within the High Court framework.",
    color: "blue",
  },

  {
    title: "Corporate & Commercial",
    description:
      "Strategic advisory for mergers, acquisitions, and regulatory compliance for industry leaders across Kerala.",
    color: "white",
  },

  {
    title: "Family & Matrimonial",
    description:
      "Divorce, separation, and sensitive legal mediation for evolving private matters.",
    color: "blue",
  },

  {
    title: "Intellectual Property",
    description:
      "Protecting innovation and enforcing rights in commercial and digital domains.",
    color: "white",
  },

  {
    title: "Real Estate & Property",
    description:
      "Securing land and estate transactions with structured compliance and due diligence.",
    color: "blue",
  },
];

function Domain() {
  return(
    <section className="domain">
      <div className="header">
        <h1>Strategic Domains</h1>
        <div className="line"> </div>
        <p>Our practice is built on specialized precision. We don't just practice law; we architect victories through meticulous scholarship and aggressive advocacy.</p>
      </div>

      <div className="cards">
        {domains.map((domain,index)=> (
          <Card
            key={index}
            title = {domain.title}
            description={domain.description}
            color={domain.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Domain;