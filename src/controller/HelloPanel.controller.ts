import Component from "../Component";
import Controller from "sap/ui/core/mvc/Controller";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";

export default class HelloPanel extends Controller {

  public sayHello() : void {
		MessageBox.show("Hello World!");
		MessageToast.show("Hello there!");
	}

  public openDialog() : void {
    (this.getOwnerComponent() as Component).openHelloDialog();
  }

}