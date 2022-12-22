/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from "react";
import Expert_Trainers from "./components/Expert_Trainers";
import NavLeft from "./components/NavLeft";
import PannerHome from "./components/PannerHome";
import Review from "./components/Review";
import Service from "./components/Service";
import { data_service } from "./data/Data_Service";
import { data_expert_trainer } from './data/data_expert_trainer'

function App() {
  const [dataservice, setDataservice] = useState(data_service);
  const [dataexperttrainer, setdataexperttrainer] = useState(data_expert_trainer);

  useEffect(() => {
      setdataexperttrainer(data_expert_trainer);
  },[]);



  return (
    <div className="App">
      <div className="logo">g<span style={{ color: 'red' }}>y</span>m</div>
      <NavLeft />
      <PannerHome />
      <Review />
      < Service data_service={dataservice} />
      <Expert_Trainers data_expert_trainer={dataexperttrainer} />
    </div>
  );
}

export default App;
