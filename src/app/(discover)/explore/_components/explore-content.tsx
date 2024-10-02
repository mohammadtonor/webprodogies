"use client"

import { useAppSelector } from "@/redux/store"
import dynamic from "next/dynamic"

type Props = { layout: "SLIDER" | "LIST"; category?: string }

const SearchGroups = dynamic(
  () =>
    import("./searched-groups").then((components) => components.SearchGroups),
  { ssr: true },
)

const ExplorePageContent = (props: Props) => {
  const { isSearching, data, status, debounce } = useAppSelector(
    (state) => state.searchReducer,
  )
  return (
    <div className="flex flex-col">
      {isSearching || debounce ? (
        <SearchGroups
          data={data}
          searching={isSearching as boolean}
          query={debounce}
        />
      ) : (
        <></>
      )}{" "}
    </div>
  )
}

export default ExplorePageContent
