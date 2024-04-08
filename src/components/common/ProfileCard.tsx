import { TCharacter } from "../../types/character";

type TProps = { character: TCharacter };

const ProfileCard = ({ character }: TProps) => {
  const { image, name, species, status } = character;
  const statusClass = () => {
    if (status === "Alive") return "text-green-500";
    if (status === "Dead") return "text-red-500";
    if (status === "unknown") return "text-yellow-500";
  };
  return (
    <article className="rounded-lg bg-white p-4 text-black hover-link">
      <div className="relative">
        <img
          loading="lazy"
          src={image.toString()}
          alt={name}
          className="mb-2 aspect-square w-full rounded-md object-cover"
        />
        <div className="absolute right-2 top-2 grid place-content-center rounded-full bg-green-700 px-2 py-0.5">
          <span className="mb-1 text-xs text-white">{species}</span>
        </div>
      </div>
      <h4 className="text-xl">{name}</h4>
      <h6 className={statusClass()}>{status}</h6>
    </article>
  );
};

export default ProfileCard;
