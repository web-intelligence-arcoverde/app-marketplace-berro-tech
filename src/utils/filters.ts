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

//@ts-ignore
export function sortFunction(a, b) {
  var dateA = new Date(a.created_at).getTime();
  var dateB = new Date(b.created_at).getTime();

  return dateA > dateB ? 1 : -1;
}

//@ts-ignore
export function sortFunctionReverse(a, b) {
  var dateA = new Date(a.created_at).getTime();
  var dateB = new Date(b.created_at).getTime();

  return dateA < dateB ? 1 : -1;
}
