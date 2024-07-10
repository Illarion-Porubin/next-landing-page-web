"use client";

import Sections from "@/components/dashboard/sections/sections";
import useTokenValidation from "@/hooks/check";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { selectProjectData } from "@/lib/redux/selectors";
import { fetchGetProject } from "@/lib/redux/slices/projectSlice";
import { ISection } from "@/types";
import React from "react";

const ContentPage = () => {
  useTokenValidation();
  
  const dispatch = useCustomDispatch();
  const project = useCustomSelector(selectProjectData);

  console.log(project);

  React.useEffect(() => {
    dispatch(fetchGetProject());
  }, [dispatch]);

  return (
    <div className="dashboard w-full h-screen overflow-hidden overflow-y-scroll">
      {project.isLoading === "loaded"
        ? project?.data?.main.map((item: ISection, id: number) => (
            <Sections data={item} page={"main"} sectionId={id} key={id}/>
          ))
        : null}
    </div>
  );
};

export default ContentPage;
