import type { MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Summary: React.FC<{}> = ({}) => {
    return (<h1>Title</h1>)
}

const Featured: React.FC<{}> = ({}) => {
    return (<div>3 boxes</div>)
}

const All : React.FC<{}> = ({}) => {
    return (<div>many smaller boxes</div>)
}

export default function Index() {
    return (
     <>
        <Summary />
        <Featured />
        <All />
    </>
    )
}

