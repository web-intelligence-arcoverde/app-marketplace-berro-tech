export function filterByAllAttributes(data: any, term: any) {
  return data.filter((item: any) => {
    for (const key in item) {
      if (typeof item[key] === 'object' && item[key] !== null) {
        if (filterByAllAttributes([item[key]], term).length > 0) {
          return true;
        }
      } else {
        if (
          item[key] &&
          item[key].toString().toLowerCase().includes(term.toLowerCase())
        ) {
          return true;
        }
      }
    }
    return false;
  });
}
