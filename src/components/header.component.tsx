import { MyInfoType } from "../types/MyInfo.type";
import ScrollAnimation from "react-animate-on-scroll";
import BrandColors from "./brandcolors.component";
import { TextTitle } from "./labels";
import React from "react";

const HeaderComponent = ({Name, Description}: MyInfoType) => {
    return (
      <div className="overflow-y-hidden">
        <ScrollAnimation animateIn="fadeInDownBig">
          <div className="flex flex-col gap-16 border bg-gradient-to-t from-white/80 via-white/25 to-white/80 p-10 md:p-20 ">
            <TextTitle className={"text-center"}>{Name}</TextTitle>
            <p className="p-1 text-2xl md:text-4xl text-justify font-[SourceCodePro] text-gray-500">{Description}</p>
          </div>
          <BrandColors />
        </ScrollAnimation>
      </div>
    )
}

export default React.memo(HeaderComponent);