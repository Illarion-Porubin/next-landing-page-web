"use client"

import React from "react";
import { IContent, ISiteInfo } from "../../../types";
import { ContentList } from "./ContentList";
import { Sort } from "../sort/Sort";

const Content = () => {
  const [content, setContent] = React.useState<ISiteInfo[]>([]);
  const [active, setActive] = React.useState<string>("Текст");
  const sort = ["Текст", "Описание"];

  return (
    <div className="dashboard">
      <Sort sort={sort} setActive={setActive} active={active}/>
      {content.map((item: ISiteInfo, id: number) =>
        active === item.mark ? (
          <ContentList item={item} key={id} sort={active} />
        ) : null
      )}
    </div>
  );
};

export default Content