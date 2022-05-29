
export function CampusSelect({campuses, campus, setCampus}) {
  return (
    <select
        name="campus"
        value={campus}
        onChange={(e) => {
          setCampus(e.currentTarget.value);
        }}
      >
        <option value="">Select a campus...</option>
        {campuses.map((campus) => (
          <option value={campus} key={campus}>
            {campus}
          </option>
        ))}
      </select>
  )
}
