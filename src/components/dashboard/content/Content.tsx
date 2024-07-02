"use client"

import React from "react";
import { IContent } from "../../../types";
import { ContentList } from "./ContentList";
import { Sort } from "../sort/Sort";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { selectContentData } from "@/lib/redux/selectors";
import { fetchGetContent } from "@/lib/redux/slices/contentSlice";

const Content = () => {
  const [content, setContent] = React.useState<ISiteInfo[]>([]);
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectContentData);
  const [active, setActive] = React.useState<string>("Текст");
  const sort = ["about", "contacts"];

  console.log(data);

  React.useEffect(() => {
    dispatch(fetchGetContent())
  }, [dispatch])

  return (
    <div className="dashboard">
      <Sort sort={sort} setActive={setActive} active={active}/>
      {content.map((item: ISiteInfo, id: number) =>
        active === item.mark ? (
          <ContentList item={item} key={id} sort={active} />
        ) : null
      )}
    </div>
  )
}

export default Content