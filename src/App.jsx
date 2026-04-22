export default function App() {
  const services = [
    {
      title: "Microsoft 365 rådgivning",
      description:
        "Oppsett, optimalisering og drift av Microsoft 365 for små og mellomstore virksomheter.",
    },
    {
      title: "Sikkerhet & tilgang",
      description:
        "Bedre kontroll med MFA, Conditional Access og sikker tilgang til dine tjenester.",
    },
    {
      title: "Enhetskontroll",
      description:
        "Strukturert håndtering av PCer og mobil via moderne Microsoft 365-verktøy.",
    },
  ];

  const accent = "#f97316";
  const primary = "#0f172a";
  const secondary = "#1e3a8a";

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
        color: primary,
        margin: 0,
      }}
    >
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="Torungen IT"
              style={{ height: "60px" }} // 🔥 20% større
            />
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              Torungen IT
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href="mailto:ljoestad@gmail.com"
              style={{
                textDecoration: "none",
                color: primary,
                fontWeight: "bold",
              }}
            >
              ljoestad@gmail.com
            </a>
            <a
              href="tel:90591820"
              style={{
                textDecoration: "none",
                color: primary,
                fontWeight: "bold",
              }}
            >
              90591820
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
          color: "white",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 7vw, 56px)",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Få kontroll på IT med Microsoft 365
          </h1>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "700px",
              color: "#dbeafe",
              lineHeight: 1.7,
            }}
          >
            Torungen IT hjelper deg med en trygg, strukturert og profesjonell
            Microsoft 365-plattform. Mindre kaos, bedre sikkerhet og enklere drift.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="mailto:ljoestad@gmail.com"
              style={{
                backgroundColor: accent,
                color: "white",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Ta kontakt
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>
            Hva jeg kan hjelpe deg med
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "20px",
                  padding: "26px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "50px",
                    background: accent,
                    borderRadius: "999px",
                    marginBottom: "16px",
                  }}
                />
                <h3 style={{ marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ color: "#475569", lineHeight: 1.7 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBDESIGN CTA */}
      <section style={{ padding: "70px 20px", background: "#e2e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              background: primary,
              color: "white",
              borderRadius: "24px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "32px" }}>
              Ferdig webside kr 15.990
            </h2>
            <p style={{ color: "#cbd5e1", marginBottom: "20px" }}>
              En moderne, mobilvennlig og profesjonell nettside – klar til bruk.
            </p>
            <a
              href="mailto:ljoestad@gmail.com"
              style={{
                background: accent,
                padding: "14px 20px",
                borderRadius: "12px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Bestill webside
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "70px 20px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2>Kontakt</h2>

          <div style={{ marginTop: "20px" }}>
            <div>E-post:</div>
            <a href="mailto:ljoestad@gmail.com" style={{ fontWeight: "bold" }}>
              ljoestad@gmail.com
            </a>
          </div>

          <div style={{ marginTop: "20px" }}>
            <div>Mobil:</div>
            <a href="tel:90591820" style={{ fontWeight: "bold" }}>
              90591820
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
