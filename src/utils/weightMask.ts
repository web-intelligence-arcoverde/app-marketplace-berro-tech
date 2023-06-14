export const weightMask = (value: string) => {
  if (!value) {
    return '';
  }
  let v = value.replace(/\D/g, '');
  v = (Number(v) / 100).toFixed(2) + '';
  v = v.replace('.', ',');
  return 'Kg ' + v;
};
