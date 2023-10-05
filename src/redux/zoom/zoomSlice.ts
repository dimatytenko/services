import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ZOOM_INITIAL_VALUES } from "../../constants/common";

export interface ZoomState {
  zoom: number;
}

const zoomState: ZoomState = {
  zoom: 100,
};

export const zoomSlice = createSlice({
  name: "zoom",
  initialState: zoomState,
  reducers: {
    zoomIncrement: (state) => {
      const index = ZOOM_INITIAL_VALUES.indexOf(state.zoom);
      if (index < ZOOM_INITIAL_VALUES.length - 1) {
        state.zoom = ZOOM_INITIAL_VALUES[index + 1];
      }
    },
    zoomDecrement: (state) => {
      const index = ZOOM_INITIAL_VALUES.indexOf(state.zoom);
      if (index > 0) {
        state.zoom = ZOOM_INITIAL_VALUES[index - 1];
      }
    },
    zoomChange: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
  },
});

export const { zoomIncrement, zoomDecrement, zoomChange } = zoomSlice.actions;

export const zoom = zoomSlice.reducer;
