export function NavList(tree, setCurrentUrl, currentUrl) {
  return (
    <ul>
      {tree.map((item) => {
        return (
          <li
            key={item.url}
            title={item.name}
            className={currentUrl.includes(item.url) ? "active" : ""}
          >
            <a
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setCurrentUrl(item.url);
              }}
            >
              {item.name}
            </a>
            {item.children.length
              ? NavList(item.children, setCurrentUrl, currentUrl)
              : null}
          </li>
        );
      })}
    </ul>
  );
}
