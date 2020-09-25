import './App.css';
import React, { Component ,useState,useEffect} from 'react';

const api = {
  key: "19343a6fd498cd662c45b425d1ad32b1",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          theWeather: []
        }
      }
      dataBuilder(d){
        let months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
        let days = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ngày ${date} ${month} năm ${year}`
      }
      fetchWeather = async () => {
        try{
          const reqURL= `${api.base}weather?q=ho%20chi%20minh&units=metric&APPID=${api.key}`;
          var res = await fetch(reqURL);
          var resJson = await res.json();
          this.setState({
            theWeather: resJson
          })
          console.log(resJson);
        }catch(err){
            alert(err);
        }
      }
       componentDidMount(){
        this.fetchWeather();
      }
  render() {
    return (
      <div className="app">
         {( typeof this.state.theWeather.name != "undefined") ? (
            <main>
              <div>
                <div className="location-box">
                  <div className="location">{this.state.theWeather.name}, {this.state.theWeather.sys.country}</div>
                  <div className="date">{this.dataBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {this.state.theWeather.main.temp}°c
                  </div>
                  <div className="weather">{this.state.theWeather.weather[0].main}</div>
                </div>
              </div>
              </main>
              ) : ('')}
          </div>
    );
  }
}

export default App;
// function App(){
//   const [weather, setWeather] = useState({});

//   function dataBuilder(d){
//     let months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
//     let days = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ngày ${date} ${month} năm ${year}`
//   }
   
//   useEffect(()=>{
//       const fetchWeather = async () => {
//         try{
//           const reqURL= `${api.base}weather?q=ho%20chi%20minh&units=metric&APPID=${api.key}`;
//           var res = await fetch(reqURL);
//           var resJson = await res.json();
//           setWeather(resJson);
//           console.log(resJson);
//         }catch(err){
//             alert(err);
//         }
//       }
//       fetchWeather();
//   },[])
//   return (
//     <div className="app">
//       {(typeof weather.main != "undefined") ? (
//       <main>
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dataBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {weather.main.temp}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         </main>
//         ) : ('')}
//     </div>
//   );
// }
// export default App;
