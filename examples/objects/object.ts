interface User {
  id: number;
  name: string;
}

export const getUser = (id: number): User => ({
  id,
  name: "Magnus",
});
