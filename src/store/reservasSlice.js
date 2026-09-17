import {createSlice} from '@reduxjs/toolkit';

export const ReservasSlice = createSlice({
  name: 'reservation',
  initialState: {
    hotelsReservation: []
  },
  reducers: {
    addReservation: (state, {payload}) => {
      state.hotelsReservation.push(payload);
    },
    removeReservation: (state, {payload}) => {
      state.hotelsReservation = state.hotelsReservation.filter(
        (hotel) => hotel.name !== payload.name
      );
    }
  }
});

export const {addReservation, removeReservation} = ReservasSlice.actions;
