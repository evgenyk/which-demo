// components/Search/SearchBar.tsx

import { Search as SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchBar = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 my-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Get it right with our expert advice
      </h1>

      <div className="flex gap-2">
        <Input
          type="search"
          placeholder="Search"
          className="flex-1 rounded-full"
        />
        <Button className="bg-blue-600 hover:bg-blue-700">
          <SearchIcon className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
