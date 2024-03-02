import CommentsList from "./CommentsList";
import data from "../data.json";
import { useState } from "react";

function MainApp() {
  const [commentsData, setCommentsData] = useState(data);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <div className="main-app">
      <CommentsList
        setCommentsData={setCommentsData}
        commentsData={commentsData}
        setPopUpIsOpen={setPopUpIsOpen}
        popUpIsOpen={popUpIsOpen}
        remove={remove}
        setRemove={setRemove}
      />
    </div>
  );
}

export default MainApp;
