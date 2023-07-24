import { MainContainer } from "./components/MainContainer";

function App() {
  const images = [
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501100077/univ/wpub/501100077_univ_cnt_1_lg.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501100073/univ/wpub/501100073_univ_cnt_1_lg.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/102015009/univ/art/102015009_univ_lsr_lg.jpg",
  ];

  return (
    <div className="App">
      <MainContainer images={images} />
    </div>
  );
}

export default App;
