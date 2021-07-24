import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
import { UserI } from "@/interfaces/index";
import store from "../index";
@Module({
  dynamic: true,
  name: "user",
  store,
})
class User extends VuexModule {
  user: UserI = {
    firstName: "firstName",
    lastName: "lastName",
    id: "1",
  };

  isAuthenticated: boolean = false;

  @Mutation
  SET_USER(user: UserI) {
    this.user = user;
  }

  @Action({ commit: "SET_USER" })
  setUser(user: UserI) {
    return user;
  }

  get getState() {
    return this;
  }
}

export default getModule(User);
