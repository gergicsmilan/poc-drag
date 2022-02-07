export const mock: MockData = [
  {
    id: "1",
    title: "Monday",
    subjects: [
      {
        id: "matek1",
        name: "Matek 1",
      },
      {
        id: "matek2",
        name: "Matek 2",
      },
    ],
  },
  {
    id: "2",
    title: "Monday 2",
    subjects: [
      {
        id: "angol",
        name: "Angol",
      },
      {
        id: "magyar",
        name: "Magyar",
      },
    ],
  },
];

export type MockData = {
  id: string;
  title: string;
  subjects: {
    id: string;
    name: string;
  }[];
}[];
