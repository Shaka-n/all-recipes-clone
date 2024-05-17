import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';
import { Link } from "@remix-run/react"
import {
  Form,
  json
} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "SomeRecipes" },
    { name: "description", content: "This is a clone of AllRecipes.com" },
  ];
};

export const action = async () => {
  // call backend create
  return json({})
}

export default function Index() {
    return (
        <div id="body" className=" max-w-2xl p-8 ml-10 flex flex-col space-y-4">
            <Form method="post">
              <div>
                <div>Recipe Title</div>
                <input
                  defaultValue=""
                  name="title"
                  type="text"
                  placeholder="Give your recipe a title" />   
              </div>
              <button type="submit">Submit Recipe</button>
            </Form>
        </div>
    );
}

