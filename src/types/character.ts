export type TCharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  image: URL;
  species: string;
};

export type TODO = any;
