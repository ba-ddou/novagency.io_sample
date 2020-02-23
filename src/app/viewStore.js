import {
	observable,
	action,
	computed,
	configure,
	runInAction,
	toJS
} from "mobx";

class viewStore {
	@observable
	language = "en";

	@observable
	floatingMessageContent = false;

	@observable
	splashScreen = 2;
}

export default new viewStore();
