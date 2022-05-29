import navlinks from "../navlinks.json";

export function useCampuses() {
  return navlinks.reduce((accumulator, item) => {
    if (!accumulator.includes(item.campus)) {
      accumulator.push(item.campus);
    }
    return accumulator;
  }, []);
}
