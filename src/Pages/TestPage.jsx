import React from "react";
import { Photos } from "./LandscapePages/XinjiangContent";
const TestPage = () => {
  return (
    <div>
      {Photos.map((e) => (
        <div>
          <img src={e.url} style={{ width: "500px", display: "block" }} />
          <div>{e.id}</div>
          <div>{" " + e.description}</div>
        </div>
      ))}
    </div>
  );
};
export default TestPage;
