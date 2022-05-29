import navlinks from "../navlinks";
import { useState } from "react";
import { useNavTree } from "../hooks/useNavTree";
import { NavList } from "./NavList";

export function SiteNav({ campus }) {
  const [currentUrl, setCurrentUrl] = useState("/");
  const tree = useNavTree(navlinks, campus, currentUrl);

  // add return to home link
  tree.unshift({ section: "", name: "Catalog Home", url: "/", children: [] });
  const list = NavList(tree, setCurrentUrl, currentUrl);

  return list;
}
