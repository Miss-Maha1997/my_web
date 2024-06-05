/* eslint-disable react/no-unescaped-entities */
import Filter from "@/components/Filter"
import TampletCard from "@/components/cards/TampletCard"
import HomeFilters from "@/components/home/HomeFilters"
import LocalSearch from "@/components/shared/search/LocalSearch"
import { HomePageFilters } from "@/constants/filters"


/* eslint-disable tailwindcss/no-custom-classname */
const tampletes = [
  {_id: '1', 
  title: 'Cascading Deletes in SQLAlchemy?', 
  category: 'eccommerce',
  price: 30
 },
  {_id: '2', 
  title: 'How center a dev?', 
  category:'fitness',
  price: 60
 } 
]
export default function Home()  {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark-100_light900">
          All Questions
        </h1>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tampletes"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters/>

      <div className="mt-10 grid flex-col gap-4 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        {tampletes.length > 0 ? 
          tampletes.map((tamplete) => (
            <TampletCard
              key={tamplete._id}
              _id={tamplete._id}
              title={tamplete.title}
              categorty={tamplete.category}
              price={tamplete.price}
              imgURL="/assets/images/th.jpg"/>
          ))
        : <p>Theres's no tampletes</p>}

      </div>
      
    </>
  )
}

