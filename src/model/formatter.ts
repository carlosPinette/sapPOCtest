const statusText = (sStatus: string): string => {
  switch(sStatus) {
    case "A":
      return "New";
    case "B":
      return "In Progress";
    case "C":
      return "Done";
    default:
      return sStatus;
  }
}

export {
  statusText
};
