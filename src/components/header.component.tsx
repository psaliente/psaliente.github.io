import { MyInfoType } from "../types/MyInfo.type";
import ScrollAnimation from "react-animate-on-scroll";

const HeaderComponent = ({Name, Description}: MyInfoType) => {
    return (<ScrollAnimation animateIn="fadeInDownBig">
      <div className="flex flex-col gap-16 bg-gradient-to-t from-gray-100/95 to-sky-50/60 p-10 md:p-20 ">
        <h1 className="p-1 text-5xl md:text-7xl text-center font-[SourceCodePro] font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-500 to-green-500">{Name}</h1>
        <p className="p-1 text-2xl md:text-4xl text-justify font-[SourceCodePro] text-gray-500">{Description}</p>
      </div>
    </ScrollAnimation>)
}

export default HeaderComponent