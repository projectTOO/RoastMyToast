'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('recipes', [
      {
        title: "Lasagna",
        ingredients: "1 pound bulk Italian sausage\n1 1/2 pounds lean ground beef\n1 (8 ounce) package fresh mushrooms, coarsely chopped\n1 teaspoon salt\n1/2 teaspoon freshly ground black pepper\n1/2 teaspoon dried Italian herb seasoning (optional)\n1/4 teaspoon red pepper flakes\n6 cups prepared marinara sauce\n2 tablespoons water, plus more as needed\n2 eggs\n2 pounds whole-milk ricotta cheese\n1 (8 ounce) container fresh mozzarella cheese, diced\n2/3 cup freshly shredded Parmigiano-Reggiano cheese\n1 teaspoon salt\n1/4 teaspoon freshly ground black pepper\n1 pinch cayenne pepper, or to taste\n1/4 cup chopped fresh parsley\n1 (16 ounce) package lasagna noodles\n1 (8 ounce) container fresh mozzarella cheese, diced\n1/2 cup freshly shredded Parmigiano-Reggiano cheese\n",
        instructions: "1. Place sausage and ground beef into a large saucepan over medium heat; cook and stir until meat is browned and crumbly, about 10 minutes. Break the meat apart as it cooks. Stir in mushrooms, 1 teaspoon salt, 1/2 teaspoon black pepper, Italian herb seasoning, and red pepper flakes. Turn heat to medium-high and cook until mushrooms have given off their juices and bottom of pan is almost dry.\n2. Pour prepared marinara sauce into meat mixture. Pour water into marinara sauce jar and shake to get all the sauce out of the jar; add to mixture. Reduce heat to low and simmer until meat is extremely tender, about 2 hours. Add a little more water if sauce becomes too thick. Skim excess fat from surface of the sauce and season with more salt and black pepper, if needed. Turn off heat.\n3. Preheat oven to 375 degrees F (190 degrees C).\n4. Beat eggs in a large bowl and stir in ricotta cheese, 8 ounces diced mozzarella cheese, and 2/3 cup Parmigiano-Reggiano cheese. Season cheese mixture with 1 teaspoon salt, 1/4 teaspoon black pepper, and cayenne pepper; mix in parsley.\n5. Bring a large pot of salted water to a boil. Cook lasagna in the boiling water, stirring occasionally, until cooked through but firm to the bite, about 8 minutes. Drain and rinse noodles and set aside in a bowl of cold water.\n6. Spread 1/4 the sauce into the bottom of a 10x15-inch baking pan. Top with 1/3 the noodles and spread 1/2 the ricotta cheese mixture over noodles. Spread 1/4 the meat sauce over the cheese, top with 1/3 the noodles, and spread remaining 1/2 the ricotta mixture over the noodles. Spread 1/4 the meat sauce over the cheese filling. Tap the casserole dish lightly on a sturdy work surface to settle the layers. Arrange last 1/3 the noodles over sauce and spread remaining 1/4 the sauce over the noodles. Dot top of the casserole with 4 ounces diced fresh mozzarella cheese and sprinkle with 1/2 cup Parmigiano-Reggiano cheese.\n7. Cover casserole with aluminum foil, being sure not to touch the top of the casserole with the foil. Place casserole onto a baking sheet to catch spills.\n8. Bake in the preheated oven for 30 minutes. Remove foil and cook until lasagna is golden brown and bubbling, 30 to 35 more minutes. Let set for 20 minutes before cutting into squares.\n",
        category: "Lunch",
        image_url: "https://images.media-allrecipes.com/images/61397.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        title: "California Roll",
        ingredients: "4 cups water\n2 cups uncooked white rice\n1/2 cup seasoned rice vinegar\n1 teaspoon white sugar, or as needed\n1 teaspoon salt, or as needed\n1/4 pound cooked crab meat, drained of excess liquid and shredded\n1 tablespoon mayonnaise\n5 sheets nori (dry seaweed)\n1 avocado, sliced\n1/4 cup red caviar, such as tobiko1 English cucumber, seeded and sliced into strips\n2 tablespoons drained pickled ginger, for garnish\n2 tablespoons soy sauce, or to taste1 tablespoon wasabi paste\n",
        instructions: "1. Wrap a sushi rolling mat completely in plastic wrap and set aside.\n2. Bring water and rice to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until the rice is tender and the liquid has been absorbed, 20 to 25 minutes. Transfer rice to a bowl and cut in rice vinegar using a rice paddle or wooden spoon. Season with 1 teaspoon sugar and 1 teaspoon salt, or to taste. Allow to cool to room temperature, about 30 minutes.\n3. Combine crab meat with mayonnaise in a small bowl.\n4. Place a sheet of nori on a flat work surface. Spread a thin layer of rice on top of the nori. Place the nori, rice side down, on the prepared rolling mat. Place 2 to 3 avocado slices on top of the nori in one layer. Top with 2 to 3 tablespoons of the crab mixture. Spoon 1 to 2 teaspoons tobiko lengthwise on one side of the avocado-crab mixture, and 2 cucumber strips on the other side. Using the mat as a guide, carefully roll the California roll into a tight log. Remove the rolling mat. Top roll with more tobiko, cover with plastic wrap, and gently press the tobiko into the top of the roll. Remove the plastic and cut roll into 6 even pieces using a wet knife. Repeat with remaining sheets of nori and filling. Serve garnished with pickled ginger, soy sauce, and wasabi paste.\n",
        category: "Dinner",
        image_url: "https://images.media-allrecipes.com/userphotos/560x315/4543382.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        title: "Salmon Salad",
        ingredients: "1 10-oz package (2 fillets) Morey's Grill Seasoned Wild Salmon, thawed\n1 Head romaine lettuce\n1 Lemon, cut in half\nAbout 8 small tomatoes, halved\n1/4 Cup shredded Parmesan cheese\nA handful of croutons\nChopped parsley\nFresh cracked black pepper\nOil for brushing the grill pan\nHomemade Caesar Dressing\n",
        instructions: "1. Slice the entire head of romaine lettuce in half lengthwise. Leave the root intact so the leaves stay together.\n2. Heat a grill pan on medium high heat until quite hot. Brush it lightly with oil.\n3. Grill the thawed salmon fillets for about 2 -3 minutes on each side until the fish is just barely cooked through. Set aside.\n4. Set the romaine halves onto the hot grill, cut side down. Grill just long enough to get nice grill marks, about a minute or so. Set the lemon halves on the grill as well. Remove the lettuce to a serving platter, cut side UP, along with the lemon halves.\n5. Scatter the tomatoes, Parmesan, croutons, and parsley over the lettuce. Sprinkle liberally with pepper. Top the lettuce with the salmon fillets.\n6. Drizzle with the Caesar dressing and serve immediately.\n",
        category: "Lunch",
        image_url: "https://theviewfromgreatisland.com/wp-content/uploads/2015/06/Grilled-Salmon-Caesar-Salad-8306-June-24-2015-11.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        title: "Lasagna",
        ingredients: "Ingredients - Meat Sauce:\n2 tbsp. butter\n2 tbsp. olive oil\n2 lbs. finely ground ground beef\n1 lb. crimini mushrooms, sliced\n1 onion,diced\n6 cloves garlic, diced\n4 cups spaghetti sauce\n3/4 c. red wine\n1 tsp. sugar\n2 tsp. dried oregano\nkosher salt, to taste\nground black pepper, to taste\nIngredients - Béchamel Sauce:\n1 small onion\n6 cloves\n2 bay leaves\n3 tbsp. butter\n4 heaped tbsp. flour\n1 qt. whole milk\n1/8 tsp. nutmeg, freshly grated\nkosher salt, to taste\nground black pepper, to taste\nOther Ingredients:\n8 oz. grated Parmesan cheese\n1 box of No-Boil lasagna noodles\nFresh mozzarella (optional)\nFresh basil (optional)\n",
        instructions: "1. Melt 2 tbsp. butter in a saucepan and sauté sliced mushrooms with salt and pepper. Set aside.\n2. In a separate pot, sauté one chopped onion and chopped garlic in olive oil until soft. Set aside.\n3. In separate pan, brown ground beef, breaking it up as it cooks.\n4. Add the beef and mushrooms to the onion and garlic mixture and stir in spaghetti sauce, red wine, oregano, sugar and salt and pepper, to taste. Set aside.\n5. Press cloves into an onion and put in a microwave safe bowl with half and half, bay leaves and nutmeg.\n6. Cook in microwave on low heat until hot. Strain.\n7. Cook flour and butter for a few minutes to make a roux. Be sure to cook it through all the way to ensure there is no floury taste.\n8. Once cooked through, whisk in the infused milk and season with salt and pepper to taste.\n9. Preheat oven to 350°.\n10. In lasagna pan, layer meat sauce, white sauce, mozzarella and Parmesan cheese and noodles. Optional: add basil to taste.\n11. Repeat three times and cover with leftover meat sauce and Parmesan cheese.\n12. Cover the pan with foil and bake for 45 minutes, removing foil for the last 15.\n",
        category: "Dinner",
        image_url: "https://www.sprinklesandsprouts.com/wp-content/uploads/2019/07/Classic-Lasagna-with-Bechamel.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
      {
        title: "Fajitas",
        ingredients: "For the Steak Fajita Marinade:\n1/2 cup (120ml) soy sauce\n1/2 cup (120ml) lime juice, from 6 to 8 limes\n1/2 cup (120ml) canola oil\n1/4 cup (55g) packed brown sugar\n2 teaspoons ground cumin seed\n2 teaspoons freshly ground black pepper\n1 tablespoon chili powder\n3 medium cloves garlic, finely minced (about 1 tablespoon)\n2 pounds (900g) trimmed skirt steak (about 1 whole steak), cut crosswise into 5- to 6-inch pieces\nFor the Fajitas:\n1 large red bell pepper, stemmed, seeded, and cut into 1/2-inch-wide strips\n1 large yellow bell pepper, stemmed, seeded, and cut into 1/2-inch-wide strips\n1 large green bell pepper, stemmed, seeded, and cut into 1/2-inch-wide strips\n1 white or yellow onion, cut into 1/2-inch slices\n12 to 16 fresh flour or corn tortillas, hot\n1 recipe guacamole, for serving, if desired\n1 recipe Pico de Gallo, for serving, if desired\nSour cream, shredded cheese, and salsa, for serving, if desired\n",
        instructions: "1. For the Fajita Marinade: Combine soy sauce, lime juice, canola oil, brown sugar, cumin, black pepper, chili powder, and garlic in a medium bowl and whisk to combine. Transfer 1/2 cup (120ml) marinade to a large bowl and set aside.\n2. For the Steak: Place steaks in a gallon-sized zipper-lock bag and add remaining marinade. Seal bag, squeezing out as much air as possible. Massage bag until meat is fully coated in marinade. Lay flat in the refrigerator, turning every couple of hours, for at least 3 hours and up to 10.\n3. For the Fajitas: While steak marinates, toss peppers and onions in bowl with reserved 1/2 cup marinade. Refrigerate until ready to use.\n4. When ready to cook, remove steaks from marinade, wipe off excess, and transfer to a large plate. Light one chimney full of charcoal. When all charcoal is lit and covered with gray ash, pour out and arrange coals on one side of charcoal grate. Set cooking grate in place, cover grill, and allow to preheat for 5 minutes. Clean and oil grilling grate.\n5. Place a large cast iron skillet over cooler side of grill. Transfer steaks to hot side of grill. Cover and cook for 1 minute. Flip steaks, cover, and cook for another minute. Continue cooking in this manner, flipping and covering, until steaks are well charred and an instant-read thermometer inserted into their center registers 115 to 120°F (46 to 49°C) for medium-rare or 125 to 130°F (52 to 54°C) for medium. Transfer steaks to a large plate, tent with foil, and allow to rest for 10 to 15 minutes.\n6. Meanwhile, transfer cast iron skillet to hot side of grill and allow to preheat for 2 minutes. Add pepper and onion mix and cook, stirring occasionally, until vegetables are softened and beginning to char in spots, about 10 minutes. When vegetables are cooked, transfer steaks to a cutting board and pour any accumulated juices from plate into skillet with vegetables. Toss to coat.\n7. Transfer vegetables to a warm serving platter. Thinly slice meat against the grain and transfer to platter with vegetables. Serve immediately with hot tortillas, guacamole, pico de gallo, and other condiments as desired.\n",
        category: "Lunch",
        image_url: "https://www.seriouseats.com/2018/05/20130621-fajitas-food-lab-61-large-1500x1125.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4
      },
      {
        title: "Pan-Seared Strip Steak",
        ingredients: "2 (12-ounce) lean, grass-fed New York strip steaks\n1 teaspoon kosher salt\n3/4 teaspoon black pepper\n1 tablespoon olive oil\n2 tablespoons butter\n2 thyme sprigs\n2 garlic cloves, crushed\n",
        instructions: "Step 1 Let steaks stand 30 minutes at room temperature.\nStep 2 Sprinkle salt and pepper evenly over steaks. Heat a large cast-iron skillet over high heat. Add oil to pan; swirl to coat. Add steaks to pan; cook 3 minutes on each side or until browned. Reduce heat to medium-low; add butter, thyme, and garlic to pan. Carefully grasp pan handle using an oven mitt or folded dish towel. Tilt pan toward you so butter pools; cook 1 1/2 minutes, basting steaks with butter constantly. Remove steaks from pan; cover loosely with foil. Let stand 10 minutes. Reserve butter mixture.\nStep 3 Cut steak diagonally across grain into thin slices. Discard thyme and garlic; spoon reserved butter mixture over steak.\n",
        category: "Dinner",
        image_url: "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/seared-strip-steak-ck.jpg?itok=5zgGO2YX",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4
      },
      {
        title: "Break Pudding",
        ingredients: "3 eggs, beaten\n1 1/2 cups white sugar\n2 tablespoons light brown sugar\n1/2 teaspoon ground cinnamon\n1/4 cup butter, melted\n3 cups whole milk\n10 slices hearty farmhouse-style bread, toasted and cut into cubes\n1 cup raisins\n1/2 cup light brown sugar\n1 tablespoon all-purpose flour\n1 pinch ground cinnamon1 egg\n2 tablespoons butter, melted\n1 1/4 cups whole milk\n1 pinch salt\n1 tablespoon vanilla extract\n",
        instructions: "1. Preheat oven to 375 degrees F (190 degrees C). Grease a 2-quart baking dish.\n2. In a mixing bowl, whisk 3 eggs, white sugar, 2 tablespoons of light brown sugar, 1/2 teaspoon of cinnamon, 1/4 cup of butter, and 3 cups of whole milk together, and gently stir in the bread cubes and raisins. Lightly spoon the mixture into the prepared baking dish.\n3. Bake in the preheated oven until browned and set in the middle, 50 to 55 minutes; cover the dish with foil after 30 minutes to prevent excessive browning. Let the pudding stand for 10 minutes before serving.\n4. For vanilla sauce, whisk 1/2 cup of light brown sugar, the flour, a pinch of cinnamon, 1 egg, 2 tablespoons of melted butter, 1 1/4 cups of whole milk,and salt together in a heavy saucepan until smooth. Heat over medium heat, whisking constantly, until thickened and the sauce coats the back of a spoon, 10 to 12 minutes. Stir in the vanilla extract. Pour sauce over warm bread pudding, or serve on the side in a bowl.\n",
        category: "Dessert",
        image_url: "https://images.media-allrecipes.com/userphotos/560x315/1112576.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('recipes', null, {});
  }
};
