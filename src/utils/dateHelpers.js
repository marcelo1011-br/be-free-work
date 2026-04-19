export const monthMap = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12"
};

export const toIsoDate = (value) => {
  if (!value) return undefined;
  const [month, year] = value.split(" ");
  const mm = monthMap[month];
  if (!mm || !year) return undefined;
  return `${year}-${mm}-01`;
};
