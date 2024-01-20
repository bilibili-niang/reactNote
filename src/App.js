import React from "react";
import Action1 from "./pages/Action1/index";
import Index from "./pages/index";
import ActionDemo from "./pages/ActionDemo/index";
import Count from './pages/Count/index'

export default function App() {
  return (
    <div className="app">
      <Action1></Action1>
      <Index></Index>
      <ActionDemo></ActionDemo>
      <Count></Count>
    </div>
  );
}
