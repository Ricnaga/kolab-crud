import { UserType } from "@/shared/types/global.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { faker } from "@faker-js/faker";

type UserState = UserType;

const initialState: UserState = {
  id: Math.random(),
  name: faker.person.fullName(),
  username: faker.internet.username(),
  email: faker.internet.email(),
  website: faker.internet.domainName(),
  phone: faker.phone.number(),
  address: {
    city: faker.location.city(),
    street: faker.location.streetAddress(),
    suite: faker.location.street(),
    zipcode: faker.location.zipCode(),
    geo: {
      lat: faker.location.latitude().toString(),
      lng: faker.location.longitude().toString(),
    },
  },
  company: {
    bs: faker.location.city(),
    catchPhrase: faker.location.city(),
    name: faker.location.city(),
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userValue = (state: RootState) => state.user;

export default userSlice.reducer;
