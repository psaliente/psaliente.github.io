import React from "react";

function BrandColors() {
    return (<div className="flex">
        <div className="block relative w-full h-16 overflow-hidden">
            <div className="bg-sky-300 w-2/3 h-12 rounded-[50%] absolute -top-2/3 left-0 blur-xl animate-pulse"></div>
            <div className="bg-blue-400 w-2/3 h-12 rounded-[50%] absolute -top-1/2 left-[20%] blur-xl animate-pulse"></div>
            <div className="bg-green-300 w-2/3 h-12 rounded-[50%] absolute -top-2/3 left-1/3 blur-xl animate-pulse"></div>
        </div>
    </div>)
}

export default React.memo(BrandColors);