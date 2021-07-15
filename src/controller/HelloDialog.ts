import Dialog from "sap/m/Dialog";
import Fragment from "sap/ui/core/Fragment";
import ManagedObject from "sap/ui/base/ManagedObject";
import View from "sap/ui/core/mvc/View";

export default class HelloDialog extends ManagedObject {
  private _oView: View;
  private pDialog: Dialog;
  constructor(oView: View) {
    super();
    this._oView = oView;
  }

  public exit() : void {
    delete this._oView;
  }

  public open() : void {
    const oView = this._oView;
    this.pDialog = oView.byId('helloDialog') as Dialog;
    if (!this.pDialog) {
      const oFragmentController = {
        onCloseDialog(): void {
          (oView.byId('helloDialog') as Dialog).close();
        }
      };
      const newDiag = Fragment.load({
        id: oView.getId(),
        name: "ui5.typescript.helloworld.view.HelloDialog",
        controller: oFragmentController
      }).then((oDialog: Dialog) => {
        oView.addDependent(oDialog);
        this.pDialog = oDialog;
        this.pDialog.open();
      });
    } else {
      this.pDialog.open();
    }
    
  }
  
}