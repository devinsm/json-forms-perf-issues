export default function getData() {
  return {
    name: "Sir Earnest Hemingway",
    vegetarian: false,
    nationality: "Other",
    favoriteFoods: ["whiskey", "big game", "marlin", "spear fish", "steak"],
    personalData: {
      drivingSkill: 10,
      height: 5.4,
      age: 111,
      vaccinations: [
        {
          brand: "Merck & Co., Inc",
          dose: 1,
          disease: "chickenpox",
        },
        {
          brand: "Pfizer",
          dose: 1,
          disease: "COVID",
        },
      ],
    },
    occupation: "Teacher",
  };
}
