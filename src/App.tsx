import { useCallback, useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { mock, MockData } from "./mockData";

function App() {
  const [data, setData] = useState<MockData>([]);

  useEffect(() => {
    setData(mock);
  }, []);

  const handleDragEnd = useCallback((result: DropResult) => {
    console.log(result);
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {data.map((d) => (
            <Droppable key={d.id} droppableId={d.id}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    margin: "0 12px 0 12px",
                    backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  }}
                  {...provided.droppableProps}
                >
                  <h2>{d.title}</h2>
                  {d.subjects.map((s, i) => (
                    <Draggable key={s.id} draggableId={s.id} index={i}>
                      {(provided, _snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h4>{s.name}</h4>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {days.map((d) => (
          <div
            key={d.id}
            style={{
              textAlign: "center",
              margin: "1px",
              padding: "5px",
              width: "100%",
              background: "grey",
            }}
          >
            <h2>{d.title}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {class_numbers.map((cn, i) => (
                <p key={cn.id} style={{ width: "100%" }}>
                  {i + 1}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// max count 24
const class_numbers = [
  { id: 0, startTime: "08:00", endTime: "08:45" },
  { id: 1, startTime: "09:00", endTime: "09:45" },
  { id: 2, startTime: "10:00", endTime: "10:45" },
];

const days = [
  { id: 0, title: "Monday" },
  { id: 1, title: "Tuesday" },
  { id: 2, title: "Wednesday" },
  { id: 3, title: "Thursday" },
  { id: 4, title: "Friday" },
];

//id: "123" -> 1: második sor, 2: wednesday, 3: 4. óra
const activities_by_classes = [
  {
    id: "class1",
    name: "11.c",
    subjects: [
      {
        id: "angol1",
        subject: "Angol",
        teacher: "Kiss Malom",
        group: 0,
        length: 2,
      },
      {
        id: "matek123",
        subject: "Matek",
        teacher: "Mateking Matek",
        group: 0,
        length: 1,
      },
    ],
  },
  {
    id: "class2",
    name: "9.a",
    subjects: [
      {
        id: "angol",
        subject: "Angol",
        teacher: "Kiss Malom",
        group: 0,
        length: 2,
      },
      {
        id: "matek333",
        subject: "Matek",
        teacher: "Mateking Matek",
        group: 0,
        length: 1,
      },
      {
        id: "magyar",
        subject: "Magyar",
        teacher: "Magyar Tomi",
        group: 0,
        length: 1,
      },
    ],
  },
];
