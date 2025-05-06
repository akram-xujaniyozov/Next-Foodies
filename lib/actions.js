"use server";

export async function shareMeal(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    cretor: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log("meal", meal.image.split("."));
}
