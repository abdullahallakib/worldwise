import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message";

const CityList = (cities, isloading) => {
  if (isloading) return <Spinner />;

  if (!cities.length)  
    return (
      <Message message="Add your first city by cliking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
