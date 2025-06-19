import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ideasReducer from './slices/ideasSlice';
import trendsReducer from './slices/trendsSlice';
import calendarReducer from './slices/calendarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ideas: ideasReducer,
    trends: trendsReducer,
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;