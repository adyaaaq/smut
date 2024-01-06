import './App.css';
import InfoList from './components/values/valueList';
import CharmList from './components/charm/charmList';
import Countries from './components/country_slider/countries';
import AdvList from './components/advantages/advs';
function App() {
  return (
    <div className="App">
      <AdvList/>
      <div class="item">
        <h2>Meregeljilijn Suragalta</h2>
        <div class = "list">
          <ul>
              <li>1. Боловсруулах үйлдвэрлэлийн ажилтан</li>
              <li>2. Гагнуурчин</li>
              <li>3. Малчин</li>
              <li>4. Ойжуулагч</li>
          </ul>
        </div>
      </div>


      <div class="item">
        <h2>Техникийн боловсруулах үйлдвэрлэлийн ажилтан</h2>
        <div class = "list">
          <ul>
              <li>5. Хунд машин механизмын операторч</li>
              <li>6. Суу боловсруулах үйлдвэрлэлийн ажилтан</li>
              <li>7. Хунд машин механизмын засварчин</li>
              <li>8. Барилгын засал чимэглэлч</li>
              <li>9. Авто машины засварчин</li>
              <li>10. Гагнуурчин</li>
              <li>11. Оёмол бүтээгдэхүүний оёдолчин</li>
              <li>12. Хунд машин механизмын засварчин</li>
              <li>13. Барилгын засал чимэглэлч</li>
              <li>14. Авто машины засварчин</li>
              <li>15. Гагнуурчин</li>
              <li>16. Оёмол бүтээгдэхүүний оёдолчин</li>
          </ul>
        </div>
      </div>
    </div>  
  );
}

export default App;
