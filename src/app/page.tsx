import Link from 'next/link';
import {
  BookOpenText,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import Testimonial from '@/components/testimonial';
import FeaturedRecipe from '@/components/featuredRecipe';
import { Suspense } from 'react';
import { barrio } from './fonts/fonts';
export default async function Home() {
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

      <section className="flex flex-col gap-2 justify-center items-center p-2 text-center">
        <Suspense fallback="Loading Featured Recipe...">
          <FeaturedRecipe />
        </Suspense>
      </section>

      <section className="py-12 text-center mx-2">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-800 mt-2 mb-5">
          What Our Users Say
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <Testimonial
            name="John Doe"
            text="I found the perfect recipe for my family dinner. Easy to follow
              and delicious!"
          />
          <Testimonial
            name="Abigail Smith"
            text="The categories are so helpful. I found exactly what I was
              craving!"
          />
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Cooking Tips & Tricks
        </h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Learn the art of perfectly cooking rice every time!
          </p>
          <p className="text-lg text-gray-700">
            Master the technique of making a smooth, creamy risotto.
          </p>
        </div>
        <p className="pt-5 uppercase text-sm text-amber-500">
          Soon on our website
        </p>
      </section>

      <section className="py-12  text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Follow Us</h2>
        <div className="flex gap-2  items-center justify-center">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-amber-600 hover:text-amber-500"
            >
              <Instagram />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-amber-600 hover:text-amber-500"
            >
              <Facebook />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-amber-600 hover:text-amber-500"
            >
              <Twitter />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-amber-600 hover:text-amber-500"
            >
              <Linkedin />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com"
              className="text-amber-600 hover:text-amber-500"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
