import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/App.css";

import Header from "./Layout/Header";
import CardList from "./Components/CardList";
import CardDetails from "./Components/CardDetails";

function App() {
  const [dataList, setdataList] = useState([]);
  const [selectedCard, setselectedCard] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xc8d401f1A3cE0DB2C17259D5C93AB6A23D9d96dB&order_direction=asc"
      );
      console.log(openSeaData.data.assets);
      setdataList(openSeaData.data.assets);
    };
    return getData();
  }, []);

  return (
    <div className="app_container">
      <div className="app">
        <Header />
        {dataList.length > 0 && (
          <>
            <CardDetails listData={dataList} selectedData={selectedCard} />
            <CardList OSdata={dataList} setselectedData={setselectedCard} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
