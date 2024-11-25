import Link from 'next/link';
import { barrio } from './layout';
import { BookOpenText } from 'lucide-react';
import RecipesList from '@/components/recipesList';
export default function Home() {
  return (
    <main>
      <section className="  text-white w-full h-[400px] md:h-[500px] bg-amber-500  to-amber-500 flex flex-col justify-center gap-5 items-center text-center pattern">
        <BookOpenText className="size-20 sm:size-28 md:size-32 " />

        <div className="flex flex-col gap-5 items-center">
          <h1
            className={`${barrio.className} text-4xl sm:text-5xl md:text-7xl mb-5 `}
          >
            Every recipe tells a story
          </h1>
          <p className=" min-w-1/2 text-md p-3 sm:p-4 md:text-xl md:p-5 bg-amber-700">
            Discover the worlds best recipes.
          </p>
          <Link
            href="/recipes"
            className="text-amber-700 text-md md:text-xl border border-amber-700 p-2 hover:bg-amber-700 hover:text-white transition duration-300"
          >
            See all recipes
          </Link>
        </div>
      </section>
      <section className="flex flex-col px-6 py-4 ">
        <h1 className="text-xl sm:text-3xl font-semibold text-zinc-700">
          Italian Recipes
        </h1>

        <RecipesList tag="Italian" limit={3} />
        <div className="flex justify-center sm:justify-end mt-5">
          <Link
            className="hover:bg-amber-600 transition duration-300 text-sm p-2 rounded bg-amber-500 text-white"
            href={'#'}
          >
            See more
          </Link>
        </div>
      </section>

      <section className="flex flex-col px-6 py-4 ">
        <h1 className="text-xl sm:text-3xl font-semibold text-zinc-700">
          Asian Recipes
        </h1>

        <RecipesList tag="Asian" limit={3} />
        <div className="flex justify-center sm:justify-end mt-5">
          <Link
            className="hover:bg-amber-600 transition duration-300 text-sm p-2 rounded bg-amber-500 text-white"
            href={'#'}
          >
            See more
          </Link>
        </div>
      </section>
    </main>
  );
}
