import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchBar(props: { onSubmit: () => Promise<void> }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form className="px-4 w-1/2" onSubmit={handleSubmit}>
      <div className="relative">
      <MagnifyingGlass size={30} weight="regular" className=" absolute bottom-0 -translate-y-1/3 right-2"/>
        <input
          type="text"
          placeholder="O que você deseja estudar hoje?"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
        />
      </div>
    </form>
  );
}
