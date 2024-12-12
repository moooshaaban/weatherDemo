import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@core/store';
import { Direction, Lang } from '@core/utils';
import { useSelector } from 'react-redux';

interface LangState {
  lang: Lang;
  direction: Direction;
}

const initialState: LangState = {
  lang: Lang.en,
  direction: Direction.ltr,
};

const langSlice = createSlice({
  name: 'langSlice',
  initialState,
  reducers: {
    changeLanguage(state, { payload }: PayloadAction<Lang>) {
      state.lang = payload;
    },
    changeDirection(state, { payload }: PayloadAction<Direction>) {
      state.direction = payload;
    },
  },
});

export const useCurrentLangSelector = () =>
  useSelector((state: RootState) => state.lang.lang);

export const useLangIsAr = () =>
  useSelector((state: RootState) => state.lang.lang == Lang.ar);

export const useDirection = () =>
  useSelector((state: RootState) => state.lang.direction);


export default langSlice.reducer;
export const { changeLanguage } = langSlice.actions;
export const { changeDirection } = langSlice.actions;
