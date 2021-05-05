import SearchPage from "./SearchPage";
import { useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SearcgPageFunc() {
  let query = useQuery();

  return (
    <div>
      <SearchPage que={query.get("q")} />
    </div>
  );
}

export default SearcgPageFunc;
