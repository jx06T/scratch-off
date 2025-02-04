"use client"
import { useState } from "react";
import Link from "next/link";
interface StepT { text: string, hash: string }

function AStep({ hash, text }: StepT) {
    return (
        <Link className=" pointer-events-auto block py-2 px-6 border-red-500 border-2 rounded-full bg-red-100 w-fit" href={hash} >{text}</Link>
    )
}
function StepsSidebar() {
    const [showSidebar, setShowSidebar] = useState<boolean>(true)
    const stepsList: StepT[] = [
        { text: "上傳圖片", hash: "#upload-image" },
        { text: "布局設定", hash: "#layout" },
        { text: "刮除區域設定", hash: "#area" },
        { text: "遊戲選擇", hash: "#game" },
    ]
    return (
        <div
            style={{ transform: `translateX(${showSidebar ? 0 : -165}px)` }}
            className=" h-screen duration-500 transition-transform absolute top-0 pt-20 px-[4%] sm:px-[min(2rem,8%)]  pointer-events-none bg-white/30 backdrop-blur-sm shadow-lg "
        >
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className={` pointer-events-auto duration-500 transition-all  text-left block py-2 ${showSidebar ? "px-6" : "px-4 opacity-40"}  border-red-500 border-2 rounded-full bg-red-100`}
                style={{ transform: `translateX(${showSidebar ? 0 : 120}px)` }}
            >
                {showSidebar ? "close" : "　>"}
            </button>
            <div className="h-full space-y-4 mt-4" >
                {stepsList.map((e) => (
                    <AStep key={e.hash} {...e} />
                ))}
            </div>
        </div >
    )
}

export default StepsSidebar