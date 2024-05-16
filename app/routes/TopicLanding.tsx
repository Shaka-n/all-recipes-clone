import type { MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type SummaryProps = {
    title: string,
    summary: string,
}

const Summary: React.FC<SummaryProps> = ({title, summary}) => {
    return (
        <>
        <h2 className="text-4xl font-bold text-center mb-2">{title}</h2>
        <h3 className="font-light text-center">{summary}</h3>
        </>
    )
}

const FeaturedCard: React.FC<{}> = ({}) => {
    return (
        <div className="mr-8">
        <img className="mb-4" src="https://www.allrecipes.com/thmb/44-DiFpiWbBKUaww81DP-SLN4r8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(1905x1901:1907x1903):format(webp)/7510177-air-fryer-sweet-potato-chips-GOLDMAN-R311171-4x3-1404-b5aeddb980624fa7bddf35a8a6b6445c.jpg" />
        <div className="font-semibold tracking-widest text-gray-600 text-xs mb-2">SNACK CHIP RECIPES</div>
        <div className="font-bold text-xl">Air Fryer Sweet Potato Chips</div>
        </div>
    )
}

const Featured: React.FC<{}> = ({}) => {
    return (<div className="grid grid-cols-3">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
    </div>)
}


const All : React.FC<{}> = ({}) => {
    return (<div>many smaller boxes</div>)
}

export default function Index() {
    return (
    <div id="body" className=" max-w-7xl p-8 ml-10 flex flex-col space-y-4">
        <Summary title="Healthy Snacks" summary="Veggie chips. Easy smoothies. Quick wraps. Find a healthy, filling snack you and your munchkin will devour."/>
        <Featured />
        <All />
    </div>
    )
}

