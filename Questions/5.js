/* Question 5:
Find the veg menu list from the given menu

const menu = [
        "Kadai Paneer","Dal Makhni","Masala Dosa","Chicken Soup","Chicken Butter Masala","Veg Chowmein",
        "Egg Curry", "Egg Maggie","Chicken Fry","Chicken Biryani","Khichdi","Handi Paneer","Onion Paratha",
        "Garlic Naan","Onion Pizza","Garlic Bread","Onion Rings","Chilli Paneer",
       ];
*/

// Ans:

const menu = [
    "Kadai Paneer","Dal Makhni","Masala Dosa","Chicken Soup","Chicken Butter Masala","Veg Chowmein",
    "Egg Curry", "Egg Maggie","Chicken Fry","Chicken Biryani","Khichdi","Handi Paneer","Onion Paratha",
    "Garlic Naan","Onion Pizza","Garlic Bread","Onion Rings","Chilli Paneer",
   ];

   function isVeg(food){
    if(food.toLowerCase().includes('egg') || food.toLowerCase().includes('chicken')){
        return false;
    }
    else
    {
        return true;
    }
   };

   let vegMenu=menu.filter(isVeg);
   console.log(vegMenu);