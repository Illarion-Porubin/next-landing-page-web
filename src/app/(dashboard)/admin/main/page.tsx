"use client";

import Sections from "@/components/dashboard/sections/sections";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { selectProjectData } from "@/lib/redux/selectors";
import { fetchGetProject } from "@/lib/redux/slices/projectSlice";
import { ISection } from "@/types";
import React from "react";

const ContentPage = () => {
  const dispatch = useCustomDispatch();
  const project = useCustomSelector(selectProjectData);

  React.useEffect(() => {
    dispatch(fetchGetProject());
  }, [dispatch]);

  console.log(project?.data?.main);

  return (
    <div className="dashboard w-full h-screen overflow-hidden overflow-y-scroll">
      {project.isLoading === "loaded"
        ? project?.data?.main.map((item: ISection, id: number) => (
            <Sections data={item} mark={"main"} key={id} id={id + 1}/>
          ))
        : null}
    </div>
  );
};

export default ContentPage;
