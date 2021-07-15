import AppComponent from "../Component";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace ui5.typescript.helloworld.controller
 */
export default class App extends Controller {

	public onInit() : void {
		// apply content density mode to root view
		this.getView().addStyleClass((this.getOwnerComponent() as AppComponent).getContentDensityClass());
	}

	public openDialog(): void {
		(this.getOwnerComponent() as AppComponent).openHelloDialog();
	}

}