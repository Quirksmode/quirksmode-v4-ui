"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react';
import IconSearch from '@/assets/icons/search.svg';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const PageSearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get('s') || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    e.preventDefault();
    router.push(`${pathname}?s=${e.target.value}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSearchValue(searchValue);
    e.preventDefault();
    router.push(`${pathname}?s=${searchValue}`);
  };

  return (
    <div className="PageSearchForm Filter">
      <form
        role="search"
        className="PageSearch__searchForm"
        onSubmit={handleSubmit}
      >
        <div className="PageSearch__search">
          <label
            className="PageSearch__search"
            htmlFor="PageSearch__searchInput"
          >
            <span className="visuallyHidden">Search Quirksmode</span>
            <input
              onChange={handleChange}
              className="PageSearch__searchInput"
              value={searchValue}
              placeholder="Search..."
              type="text"
              id="PageSearch__searchInput"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
          </label>
        </div>
        <button
          type="submit"
          className="PageSearch__submit visuallyHidden"
        >
          <span className="visuallyHidden">Search</span>
          <IconSearch />
        </button>
      </form>
    </div>
  );
};

export default PageSearchForm;
