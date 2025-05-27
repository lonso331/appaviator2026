borrar archivos 
import { useState } from "react";

function PredictorApp() {
  const [a, setA] = useState("\");
  const [b, setB] = useState("\");
  const [c, setC] = useState("\");
  const [result, setResult] = useState("");

  function predecir(a, b, c) {
    if (c < 1.10 && b >= 1.60 && b <= 9.99) return "Apuesta a 1.50";
    if (c >= 1.00 && c <= 1.59 && b < 1.10) return "Esperar siguiente turno";
    if (c >= 3.00 && c <= 9.00) return "Apuesta a 1.50";
    if (b >= 2.00 && b <= 2.60 && c >= 2.00 && c <= 2.60) return "Apuesta a 1.50 en la segunda ronda";
    if (c > 10.00) return "Esperar siguiente turno";
    return "No hay predicción clara";
  }

  const handlePredict = () => {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    const nc = parseFloat(c);

    if (isNaN(na) || isNaN(nb) || isNaN(nc)) {
      setResult("Por favor, ingresa valores numéricos válidos.");
      return;
    }

    setResult(predecir(na, nb, nc));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 400, margin: 'auto', fontFamily: 'Arial' }}>
      <h2>Predicción de multiplicador</h2>
      <input placeholder="Antepenúltimo coeficiente" value={a} onChange={(e) => setA(e.target.value)} style={{ width: '100%', marginBottom: 8 }} />
      <input placeholder="Penúltimo coeficiente" value={b} onChange={(e) => setB(e.target.value)} style={{ width: '100%', marginBottom: 8 }} />
      <input placeholder="Último coeficiente" value={c} onChange={(e) => setC(e.target.value)} style={{ width: '100%', marginBottom: 8 }} />
      <button onClick={handlePredict} style={{ width: '100%', padding: '8px', background: '#0d6efd', color: '#fff', border: 'none', borderRadius: 4 }}>Predecir</button>
      {result && <p style={{ marginTop: 16, fontWeight: 'bold' }}>{result}</p>}
    </div>
  );
}

export default PredictorApp;
