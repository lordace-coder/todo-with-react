import React from "react";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const value = useParams().searchItem;
  // const { searchItem } = useParams();

  return <div className="">Searching for {value}</div>;
}
