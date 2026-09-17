import styles from "./header.module.css";

const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

const buildFilterDescription = ({selectedCountry, dateHotelFrom, dateHotelTo, resultCount}) => {
  const country =
    selectedCountry && selectedCountry !== "all" ? selectedCountry : "any country";
  const hasDates =
    dateHotelFrom && dateHotelFrom !== "all" && dateHotelTo && dateHotelTo !== "all";
  const dateRange = hasDates
    ? ` from ${formatDate(dateHotelFrom)} to ${formatDate(dateHotelTo)}`
    : "";
  const count = resultCount ?? 0;
  return `${count} hotel${count === 1 ? "" : "s"} available in ${country}${dateRange}`;
};

export const Header = ({
  updatePrice,
  updateCountry,
  updateSize,
  updateDateFrom,
  updateDateTo,
  selectedCountry,
  dateHotelFrom,
  dateHotelTo,
  resultCount,
}) => {
  const fecha = new Date().setHours(0, 0, 0, 0);
  const today = new Date(fecha).toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Book it</h1>
      <div className={styles.filtersBox}>
        <select
          onChange={(e) => updateCountry(e.target.value)}
          className={`${styles.filtersBox__country} ${styles.input}`}
          id="countriesInput"
        >
          <option value="all">All Countries</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="uruguay">Uruguay</option>
        </select>
        <input
          className={`${styles.filtersBox__input} ${styles.input}`}
          type="date"
          min={today}
          id="checkinInput"
          onChange={(e) => {
            updateDateFrom(e.target.value);
          }}
        />
        <input
          className={`${styles.filtersBox__input} ${styles.input}`}
          type="date"
          id="checkoutInput"
          min={today}
          onChange={(e) => {
            updateDateTo(e.target.value);
          }}
        />
        <select
          onChange={(e) => updatePrice(e.target.value)}
          className={`${styles.filtersBox__input} ${styles.input}`}
          id="pricesInput"
        >
          <option value="all">All Prices</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
        <select
          onChange={(e) => updateSize(e.target.value)}
          className={`${styles.filtersBox__input} ${styles.input}`}
          id="sizesInput"
        >
          <option value="all">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button className={styles.filtersBox__btn}>Clear</button>
      </div>
      <h2 className={styles.header__subtitle}>We have found for you...</h2>
      <p className={styles.header__filterDescription}>
        {buildFilterDescription({selectedCountry, dateHotelFrom, dateHotelTo, resultCount})}
      </p>
    </header>
  );
};
