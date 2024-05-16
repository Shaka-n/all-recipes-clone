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

const Featured: React.FC<{}> = ({}) => {
    return (<div className="flex">
        <div>1</div>
        <div>2</div>
        <div>3</div></div>)
}

const All : React.FC<{}> = ({}) => {
    return (<div>many smaller boxes</div>)
}

export default function Index() {
    return (
     <div>
        <Summary title="Healthy Snacks" summary="Veggie chips. Easy smoothies. Quick wraps. Find a healthy, filling snack you and your munchkin will devour."/>
        <Featured />
        <All />
    </div>
    )
}

