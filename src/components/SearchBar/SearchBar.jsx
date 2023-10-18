import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() != "") {
      console.log(e.target.value);
      onSubmit(e.target.value);
    }
  }

  return (
    <div className={s.container}>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        onKeyUp={submit}
        placeholder="Recherche"
        className={s.input}
      />
    </div>
  );
}
