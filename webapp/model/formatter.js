sap.ui.define([], function () {
  const statusText = sStatus => {
    switch (sStatus) {
      case "A":
        return "New";

      case "B":
        return "In Progress";

      case "C":
        return "Done";

      default:
        return sStatus;
    }
  };

  var __exports = {
    __esModule: true
  };
  __exports.statusText = statusText;
  return __exports;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9mb3JtYXR0ZXIudHMiXSwibmFtZXMiOlsic3RhdHVzVGV4dCIsInNTdGF0dXMiXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFNQSxVQUFVLEdBQUlDLE9BQUQsSUFBNkI7QUFDOUMsWUFBT0EsT0FBUDtBQUNFLFdBQUssR0FBTDtBQUNFLGVBQU8sS0FBUDs7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPLGFBQVA7O0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxNQUFQOztBQUNGO0FBQ0UsZUFBT0EsT0FBUDtBQVJKO0FBVUQsR0FYRDs7Ozs7WUFjRUQsVSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0YXR1c1RleHQgPSAoc1N0YXR1czogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBzd2l0Y2goc1N0YXR1cykge1xyXG4gICAgY2FzZSBcIkFcIjpcclxuICAgICAgcmV0dXJuIFwiTmV3XCI7XHJcbiAgICBjYXNlIFwiQlwiOlxyXG4gICAgICByZXR1cm4gXCJJbiBQcm9ncmVzc1wiO1xyXG4gICAgY2FzZSBcIkNcIjpcclxuICAgICAgcmV0dXJuIFwiRG9uZVwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHNTdGF0dXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHN0YXR1c1RleHRcclxufTtcclxuIl19