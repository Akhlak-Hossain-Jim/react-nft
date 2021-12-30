import { useEffect, useState } from "react";
import "./styles/App.css";
import RawData from "./api/data.json";

import Header from "./Layout/Header";
import CardList from "./Components/CardList";
import CardDetails from "./Components/CardDetails";

function App() {
  const [dataList, setDataList] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    fetch(
      "https://testnets-api.opensea.io/assets?asset_contract_address=0xc8d401f1A3cE0DB2C17259D5C93AB6A23D9d96dB&order_direction=asc"
    )
      .then((res) => res.json())
      .then((res) => setDataList(res.assets))
      .catch((error) => setDataList(RawData.assets));
  }, []);
  console.log(dataList);

  return (
    <div className="app_container">
      <div className="app">
        <Header />
        {dataList.length > 0 && (
          <>
            <CardDetails listData={dataList} selectedData={selectedCard} />
            <CardList OSdata={dataList} setSelectedData={setSelectedCard} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
