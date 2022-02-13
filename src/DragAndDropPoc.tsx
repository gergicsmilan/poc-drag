import { useState } from "react";
import styled from "styled-components";

const DragAndDropPoc = () => {
  const [t, setT] = useState(tasks);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, cat: string) => {
    const id = e.dataTransfer.getData("id");
    setT((prev) =>
      prev.map((t) => (t.name === id ? { ...t, category: cat } : t))
    );
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  return (
    <ContainerDrag>
      <Header>DRAG & DROP DEMO</Header>
      <Wip
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "wip");
        }}
      >
        <TaskHeader>WIP</TaskHeader>
        {t
          .filter((t) => t.category === "wip")
          .map((fT) => (
            <Draggable
              key={fT.name}
              onDragStart={(e) => onDragStart(e, fT.name)}
              draggable
              style={{ backgroundColor: fT.bgcolor }}
            >
              {fT.name}
            </Draggable>
          ))}
      </Wip>
      <Droppable
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "complete")}
      >
        <TaskHeader>COMPLETED</TaskHeader>
        {t
          .filter((t) => t.category === "complete")
          .map((fT) => (
            <Draggable
              key={fT.name}
              onDragStart={(e) => onDragStart(e, fT.name)}
              draggable
              style={{ backgroundColor: fT.bgcolor }}
            >
              {fT.name}
            </Draggable>
          ))}
      </Droppable>
    </ContainerDrag>
  );
};

export default DragAndDropPoc;

const tasks = [
  { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
  { name: "React", category: "wip", bgcolor: "pink" },
  { name: "Vue", category: "complete", bgcolor: "skyblue" },
];

const ContainerDrag = styled.div`
  text-align: center;
`;

const Header = styled.h2`
  display: inline-block;
  margin: 0;
  padding: 0;
  background-color: #e0e0e0;
  width: 100%;
`;

const TaskHeader = styled.span`
  display: inline-block;
  background-color: skyblue;
  width: 100%;
`;

const Wip = styled.div`
  position: absolute;
  width: 150px;
  height: 100vh;
  left: 0;
  top: 10;
  background-color: #eeeeee;
  border-right: 1px dotted;
`;

const Draggable = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
  margin: 5px auto;
  line-height: 5em;
`;

const Droppable = styled.div`
  position: absolute;
  width: 150px;
  height: 100vh;
  right: 0;
  top: 10;
  background-color: #9e9e9e;
  border-left: 1px dotted;
`;
