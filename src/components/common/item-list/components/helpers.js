export const getColumnStyle = (totalColumns, columnNumber) => {
  switch (columnNumber) {
    case 0:
      return { flexGrow: 1 };
    case totalColumns - 1:
      return { flexBasis: 50, textAlign: 'right' };
    default:
      return undefined;
  }
};
