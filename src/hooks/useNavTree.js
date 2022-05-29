export function useNavTree(data, campus, currentUrl) {
  const filteredData = data.filter(
    (item) => item.campus === campus && currentUrl.includes(item.section)
  );

  return buildTreeLevel(filteredData, "/");
}

function buildTreeLevel(data, parent) {
  const children = data.filter((item) => item.section === parent);

  return children.map((item) => {
    return { ...item, children: buildTreeLevel(data, item.url) };
  });
}
