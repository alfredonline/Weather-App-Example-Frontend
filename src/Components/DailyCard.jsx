import { convertToUKDateFormat } from "../Utils";

export default function DailyCard({ weatherObject }) {
  return (
    <div className="dailyCard">
      <div className="dailyCard__header">
        {convertToUKDateFormat(weatherObject.dt)}
      </div>
      <div className="dailyCard__body">
        <div className="dailyCard__body__icon">
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
        <div className="dailyCard__body__temp">
          {weatherObject.temp.day.toFixed(0) + "°C"}
        </div>
      </div>
    </div>
  );
}
