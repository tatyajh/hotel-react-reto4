'use client';
import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MainButton} from '../../../components/atoms/button/Button';
import styles from './page.module.css';
import {AppContext} from '@/store/CurrentProvider';
import {addReservation} from '@/store/reservasSlice';

const Detail = () => {
  const [selectedHotel, setSelectedHotel] = useState({
    name: '',
    description: '',
    photo: '',
    country: '',
    city: ''
  });

  const {setDetailPage} = useContext(AppContext);
  const dispatch = useDispatch();
  const listHotelsReservation = useSelector(
    (state) => state.reservation.hotelsReservation
  );

  useEffect(() => {
    const storedHotel = localStorage.getItem('selectedHotel');
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
    setDetailPage();
  }, []);

  const {name, photo, description, country, city} = selectedHotel;
  const alreadyReserved = listHotelsReservation.some(
    (hotel) => hotel.name === name
  );

  const handleReservation = () => {
    if (!alreadyReserved) {
      dispatch(addReservation(selectedHotel));
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={photo}
        width={300}
        height={300}
        className={styles.detailImage}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Pais: {country}</p>
      <p>Ciudad: {city}</p>
      <div className={styles.buttonsContainer}>
        <MainButton
          className={styles.buttonCardHotel}
          onClick={handleReservation}
          disabled={alreadyReserved}
        >
          {alreadyReserved ? 'Ya reservado' : 'Reservar'}
        </MainButton>
        <MainButton className={styles.buttonSecondary}>Favoritos</MainButton>
      </div>
    </div>
  );
};

export default Detail;
