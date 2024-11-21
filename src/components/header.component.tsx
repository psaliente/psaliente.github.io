import { MyInfoType } from "../types/MyInfo.type";
import ScrollAnimation from "react-animate-on-scroll";

const HeaderComponent = ({Name, Description}: MyInfoType) => {
    return (<ScrollAnimation animateIn="fadeInDownBig">
      <div className="flex flex-col gap-16 p-20 bg-gradient-to-t from-gray-100/95 to-sky-50/60">
        <h1 className="text-7xl text-center font-[SourceCodePro] font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">{Name}</h1>
        <p className="text-4xl text-justify font-[SourceCodePro] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">{Description}</p>
      </div>
    </ScrollAnimation>)
}

export default HeaderComponent