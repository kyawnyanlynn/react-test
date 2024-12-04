import React, { useState } from 'react';
import storeData from './storedata.json';

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState("Tohoku");

  const stores = storeData.regions[selectedRegion] || [];

  return (
    <div>
      <h1>店舗情報</h1>
      <label htmlFor="region-select">地域を選択:</label>
      <select
        id="region-select"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)} 
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        <option value="Tohoku">東北</option>
        <option value="Kanto">関東</option>
        <option value="Kansai">関西</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        <ul>
          {stores.length > 0 &&
            stores.map((store, index) => (
              <li key={index}>
                <h2>{store.storeName}</h2>
                <p>住所: {store.address}</p>
                <p>電話番号: {store.phoneNumber}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
