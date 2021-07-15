sap.ui.define(["./controller/HelloDialog", "sap/ui/core/UIComponent", "sap/ui/Device"], function (__HelloDialog, UIComponent, sap_ui_Device) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const HelloDialog = _interopRequireDefault(__HelloDialog);

  const support = sap_ui_Device["support"];
  /**
   * @namespace ui5.typescript.helloworld
   */

  const Component = UIComponent.extend("ui5.typescript.helloworld.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this);
      const control = this.getRootControl();
      this._helloDialog = new HelloDialog(control);
    },
    exit: function _exit() {
      this._helloDialog.destroy();

      delete this._helloDialog;
    },
    openHelloDialog: function _openHelloDialog() {
      this._helloDialog.open();
    },
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this.contentDensityClass = "";
        } else if (!support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = "sapUiSizeCozy";
        }
      }

      return this.contentDensityClass;
    }
  });
  return Component;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21wb25lbnQudHMiXSwibmFtZXMiOlsiSGVsbG9EaWFsb2ciLCJzdXBwb3J0IiwiQ29tcG9uZW50IiwiVUlDb21wb25lbnQiLCJtZXRhZGF0YSIsIm1hbmlmZXN0IiwiaW5pdCIsImNvbnRyb2wiLCJnZXRSb290Q29udHJvbCIsIl9oZWxsb0RpYWxvZyIsImV4aXQiLCJkZXN0cm95Iiwib3BlbkhlbGxvRGlhbG9nIiwib3BlbiIsImdldENvbnRlbnREZW5zaXR5Q2xhc3MiLCJjb250ZW50RGVuc2l0eUNsYXNzIiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b3VjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBT0EsVzs7UUFHRUMsTztBQUVUO0FBQ0E7QUFDQTs7UUFDcUJDLFMsR0FBa0JDLFc7QUFFeEJDLElBQUFBLFEsRUFBVztBQUN4QkMsTUFBQUEsUUFBUSxFQUFFO0FBRGMsSztBQVFsQkMsSUFBQUEsSSxtQkFBYztBQUNwQjtBQUNBO0FBQ0EsWUFBTUMsT0FBTyxHQUFHLEtBQUtDLGNBQUwsRUFBaEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQUlULFdBQUosQ0FBZ0JPLE9BQWhCLENBQXBCO0FBQ0EsSztBQUVNRyxJQUFBQSxJLG1CQUFjO0FBQ3BCLFdBQUtELFlBQUwsQ0FBa0JFLE9BQWxCOztBQUNBLGFBQU8sS0FBS0YsWUFBWjtBQUNBLEs7QUFFTUcsSUFBQUEsZSw4QkFBeUI7QUFDL0IsV0FBS0gsWUFBTCxDQUFrQkksSUFBbEI7QUFDQSxLO0FBVU1DLElBQUFBLHNCLHFDQUFrQztBQUN4QyxVQUFJLEtBQUtDLG1CQUFMLEtBQTZCQyxTQUFqQyxFQUE0QztBQUMzQztBQUNBLFlBQUlDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxlQUFqQyxLQUFxREgsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLGtCQUFqQyxDQUF6RCxFQUErRztBQUM5RyxlQUFLTCxtQkFBTCxHQUEyQixFQUEzQjtBQUNBLFNBRkQsTUFFTyxJQUFJLENBQUNkLE9BQU8sQ0FBQ29CLEtBQWIsRUFBb0I7QUFBRTtBQUM1QixlQUFLTixtQkFBTCxHQUEyQixrQkFBM0I7QUFDQSxTQUZNLE1BRUE7QUFDTjtBQUNBLGVBQUtBLG1CQUFMLEdBQTJCLGVBQTNCO0FBQ0E7QUFDRDs7QUFDRCxhQUFPLEtBQUtBLG1CQUFaO0FBQ0E7O1NBL0NtQmIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb0RpYWxvZyBmcm9tIFwiLi9jb250cm9sbGVyL0hlbGxvRGlhbG9nXCI7XHJcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwic2FwL3VpL2NvcmUvVUlDb21wb25lbnRcIjtcclxuaW1wb3J0IFZpZXcgZnJvbSBcInNhcC91aS9jb3JlL212Yy9WaWV3XCI7XHJcbmltcG9ydCB7IHN1cHBvcnQgfSBmcm9tIFwic2FwL3VpL0RldmljZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lc3BhY2UgdWk1LnR5cGVzY3JpcHQuaGVsbG93b3JsZFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVUlDb21wb25lbnQge1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIG1ldGFkYXRhID0ge1xyXG5cdFx0bWFuaWZlc3Q6IFwianNvblwiXHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGVsbG9EaWFsb2c6IEhlbGxvRGlhbG9nO1xyXG5cclxuXHRwcml2YXRlIGNvbnRlbnREZW5zaXR5Q2xhc3MgOiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBpbml0KCkgOiB2b2lkIHtcclxuXHRcdC8vIGNhbGwgdGhlIGJhc2UgY29tcG9uZW50J3MgaW5pdCBmdW5jdGlvblxyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IHRoaXMuZ2V0Um9vdENvbnRyb2woKSBhcyBWaWV3O1xyXG5cdFx0dGhpcy5faGVsbG9EaWFsb2cgPSBuZXcgSGVsbG9EaWFsb2coY29udHJvbCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZXhpdCgpIDogdm9pZCB7XHJcblx0XHR0aGlzLl9oZWxsb0RpYWxvZy5kZXN0cm95KCk7XHJcblx0XHRkZWxldGUgdGhpcy5faGVsbG9EaWFsb2c7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb3BlbkhlbGxvRGlhbG9nKCkgOiB2b2lkIHtcclxuXHRcdHRoaXMuX2hlbGxvRGlhbG9nLm9wZW4oKTtcclxuXHR9XHJcblx0XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHNhcFVpU2l6ZUNvbXBhY3Qgb3Igc2FwVWlTaXplQ296eVxyXG5cdCAqIGRlc2lnbiBtb2RlIGNsYXNzIHNob3VsZCBiZSBzZXQsIHdoaWNoIGluZmx1ZW5jZXMgdGhlIHNpemUgYXBwZWFyYW5jZSBvZiBzb21lIGNvbnRyb2xzLlxyXG5cdCAqXHJcblx0ICogQHB1YmxpY1xyXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gY3NzIGNsYXNzLCBlaXRoZXIgJ3NhcFVpU2l6ZUNvbXBhY3QnIG9yICdzYXBVaVNpemVDb3p5JyAtIG9yIGFuIGVtcHR5IHN0cmluZyBpZiBubyBjc3MgY2xhc3Mgc2hvdWxkIGJlIHNldFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRDb250ZW50RGVuc2l0eUNsYXNzKCkgOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMuY29udGVudERlbnNpdHlDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdC8vIGNoZWNrIHdoZXRoZXIgRkxQIGhhcyBhbHJlYWR5IHNldCB0aGUgY29udGVudCBkZW5zaXR5IGNsYXNzOyBkbyBub3RoaW5nIGluIHRoaXMgY2FzZVxyXG5cdFx0XHRpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXBVaVNpemVDb3p5XCIpIHx8IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2FwVWlTaXplQ29tcGFjdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuY29udGVudERlbnNpdHlDbGFzcyA9IFwiXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoIXN1cHBvcnQudG91Y2gpIHsgLy8gYXBwbHkgXCJjb21wYWN0XCIgbW9kZSBpZiB0b3VjaCBpcyBub3Qgc3VwcG9ydGVkXHJcblx0XHRcdFx0dGhpcy5jb250ZW50RGVuc2l0eUNsYXNzID0gXCJzYXBVaVNpemVDb21wYWN0XCI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gXCJjb3p5XCIgaW4gY2FzZSBvZiB0b3VjaCBzdXBwb3J0OyBkZWZhdWx0IGZvciBtb3N0IHNhcC5tIGNvbnRyb2xzLCBidXQgbmVlZGVkIGZvciBkZXNrdG9wLWZpcnN0IGNvbnRyb2xzIGxpa2Ugc2FwLnVpLnRhYmxlLlRhYmxlXHJcblx0XHRcdFx0dGhpcy5jb250ZW50RGVuc2l0eUNsYXNzID0gXCJzYXBVaVNpemVDb3p5XCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnREZW5zaXR5Q2xhc3M7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=