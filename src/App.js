import React from "react";
import Action1 from "./pages/Action1/index";
import Index from "./pages/index";
import Action2 from "./pages/Action2/index";
import Count from './pages/Count/index'

export default function App() {
  return (
    <div className="app">
      <Action1></Action1>
      <Index></Index>
      <Action2></Action2>
      <Count></Count>
    </div>
  );
}
