/* eslint-disable @next/next/no-img-element */
import React from "react";

const RecipePage = () => {
  return (
    <main className="flex items-center justify-center bg-[#F3E5D7] p-4">
      <article className="flex flex-col gap-8 bg-white p-6 rounded-2xl w-[736px]">
        <div className="w-full h-[#300px] overflow-hidden rounded-xl">
          <img
            src="/images/frontend-mentor/recipe-page/omelette.jpeg"
            alt="Egg Omlett"
            className="w-full h-full hover:scale-105 transition-all duration-150"
          />
        </div>

        <section className="flex flex-col gap-6">
          <h1 className="font-Young_Serif text-4xl text-[#hsl(24,5%,18%)]">
            Simple Omelette Recipe
          </h1>
          <p className="text-[#5F564D] text-md font-Outfit font-medium">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, meats.
          </p>

          {/* Preparation time card */}
          <div className="bg-[hsl(330,100%,98%)] rounded-lg p-6">
            <h3 className="text-[#7A284E] font-medium my-2">
              Preparation time
            </h3>
            <ul className="list-disc mx-6 text-sm text-[#5F564D]">
              <li className="custom-bullet ">
                <span className="font-bold">Total:</span> Approximately 10
                minutes
              </li>
              <li className="custom-bullet ">
                <span className="font-bold">Preparation:</span> 5 minutes
              </li>
              <li className="custom-bullet ">
                <span className="font-bold">Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>
          {/* Preparation time card ends*/}

          {/* Ingredients starts */}

          <h2 className="font-Young_Serif font-light text-2xl text-[#854632]">
            Ingredients
          </h2>
          <ul className="list-disc mx-6 text-[#5F564D] text-sm">
            <li className="custom-bullet">2-3 large eggs</li>
            <li className="custom-bullet">Salt, to taste</li>
            <li className="custom-bullet">Pepper, to taste</li>
            <li className="custom-bullet">1 tablespoon of butter of oil</li>
            <li className="custom-bullet">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <hr className="border-[#E3DDD7]" />
          {/* Ingredients ends */}

          {/* Instructions starts */}
          <h2 className="font-Young_Serif font-light text-2xl text-[#854632]">
            Instructions
          </h2>
          <ol className="list-decimal ml-6 text-[#5F564D] text-sm">
            <li className="custom-bullet">
              <span className="font-semibold">Beat the eggs:</span> In a bowl,
              beat the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li className="custom-bullet">
              <span className="font-semibold">Heat the pan:</span> Place a
              non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className="custom-bullet">
              <span className="font-semibold">Cook the omelette:</span> Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>
            <li className="custom-bullet">
              <span className="font-semibold">Add fillings (optional):</span>{" "}
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li className="custom-bullet">
              <span className="font-semibold">Fold and serve:</span> As the
              omelette continues to cook, carefully lift one edge and fold it
              over the fillings. Let it cook for another minute, then slide it
              onto a plate.
            </li>
            <li className="custom-bullet">
              <span className="font-semibold">Enjoy:</span> Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ol>
          <hr className="border-[#E3DDD7]" />
          {/* Instructions ends */}

          {/* Nutrition starts */}
          <h2 className="font-Young_Serif font-light text-2xl text-[#854632]">
            Nutrition
          </h2>
          <p className="text-[#5F564D] text-sm">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <table className="table-auto">
            <thead>
              <tr className="border-b-2 leading-loose">
                <th className="text-[#5F564D] text-sm font-light">Calories</th>
                <th className="text-[#854632] font-medium">277kcal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 leading-loose">
                <td className="text-center text-[#5F564D] text-sm font-light">
                  Carbs
                </td>
                <td className="text-center text-[#854632] font-medium">0g</td>
              </tr>
              <tr className="border-b-2 leading-loose">
                <td className="text-center text-[#5F564D] text-sm font-light">
                  Protein
                </td>
                <td className="text-center text-[#854632] font-medium">20g</td>
              </tr>
              <tr>
                <td className="text-center text-[#5F564D] text-sm font-light">
                  Fat
                </td>
                <td className="text-center text-[#854632] font-medium">22g</td>
              </tr>
            </tbody>
          </table>
          {/* Nutrition ends */}
        </section>
      </article>
    </main>
  );
};

export default RecipePage;
