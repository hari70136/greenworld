import React from 'react';
import './Models.css';

function Models() {
  return (
    <div className="models-container">
      <h2>Our Septic Tank Models</h2>
      <p>
        We offer a range of RCC Bio-Hydro Digester Tanks designed for homes, apartments, and institutions. Each model is built for durability, zero maintenance, and eco-smart performance.
      </p>

      <div className="model-grid">
        <div className="model-card">
          <h3>Bio-Degradation Tank</h3>
          <p>Size: 5’3” × 3’</p>
          <p>Capacity: 2 People</p>
        </div>

        <div className="model-card">
          <h3>Bio-Hydro Digestive Tank</h3>
          <p>Size: 5’3” × 4’</p>
          <p>Capacity: 4 People</p>
        </div>

        <div className="model-card">
          <h3>Bio-Degradation + Bio-Choker</h3>
          <p>Size: 5’3” × 3’ + 3’×3’</p>
          <p>Capacity: 6 People</p>
        </div>

        <div className="model-card">
          <h3>Bio-Hydro + Bio-Choker</h3>
          <p>Size: 5’3” × 4’ + 3’×3’</p>
          <p>Capacity: 8 People</p>
        </div>

        <div className="model-card">
          <h3>Bio-Hydro + 2 Bio-Chokers</h3>
          <p>Size: 5’3” × 4’ + 3’×3’ + 3’×3’</p>
          <p>Capacity: 12 People</p>
        </div>
      </div>

      <div className="process-section">
        <h3>🧪 3-Stage Bio Processing</h3>
        <ol>
          <li>Digest heavy sludges & convert to water and gas</li>
          <li>Digest floating sludges & infiltrate water</li>
          <li>Evaporates water by gravity flow</li>
        </ol>
      </div>
    </div>
  );
}

export default Models;
