const st = new Set();
export function onlyUnique(a) {
  const newArray = [];
  a.forEach((item) => {
    if (st.has(JSON.stringify(item))) {
      return;
    }
    newArray.push(item);
    st.add(JSON.stringify(item));
  });
  return newArray;
}
