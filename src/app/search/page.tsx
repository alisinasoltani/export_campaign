'use client'

import { useRef, useState, useCallback } from "react";
import OverflowSearchbar from "@/components/OverflowSearchbar";
import debounce from 'lodash.debounce';

const page = () => {
    const [query, setQuery] = useState<string>("");
    const searchRef = useRef<HTMLDivElement | null>(null);
    // const debouncedQueryHandler = useCallback(() => {
    //     debounce((new_query) => setQuery(new_query), 300);
    // }, []);
    const handleSearch = useCallback(
      debounce((searchTerm: string) => {
        setQuery(searchTerm);
      }, 300),
      []
    );
  return (
    <div>
        <OverflowSearchbar containerRef={searchRef} queryHandler={handleSearch} />
        <span className="mt-[8rem] text-black">{query}</span>
    </div>
  )
}

export default page;