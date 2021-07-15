import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import JSONModel from "sap/ui/model/json/JSONModel";
import { statusText } from "../model/formatter";

export default class InvoiceList extends Controller {

  public formatter = statusText;

  public onInit(): void {
    const oViewModel = new JSONModel({
      currency: "EUR"
    });
    this.getView().setModel(oViewModel, "view");
  }

  public onFilterInvoices(oEvent: Event): void {
    const aFilter:Filter[] = [];
    const sQuery = oEvent.getParameter("query") as string;
    if(sQuery){
      aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
    }
    const oList = this.byId("invoiceList");
    const oBinding = oList.getBinding("items") as JSONListBinding;
    oBinding.filter(aFilter);
  } 
}