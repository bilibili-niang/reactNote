import React from "react";
import Action1 from "./pages/Action1/index";
import Index from "./pages/index";
import ActionDemo from "./pages/ActionDemo/index";
import Count from './pages/Count/index'
import StyleDemo from "./pages/styleDemo";
import CommentDemo from './pages/commentDemo/index'

export default function App() {
  return (
    <div className="app">
      <Action1></Action1>
      <Index></Index>
      <ActionDemo></ActionDemo>
      <Count></Count>
      <StyleDemo></StyleDemo>
      <CommentDemo></CommentDemo>
    </div>
  );
}
