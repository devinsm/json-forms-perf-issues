const dataSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3,
      description: "Please enter your name",
    },
    vegetarian: {
      type: "boolean",
    },
    favoriteFoods: {
      type: "array",
      items: {
        type: "string",
      },
    },
    birthDate: {
      type: "string",
      format: "date",
    },
    nationality: {
      type: "string",
      enum: ["DE", "IT", "JP", "US", "RU", "Other"],
    },
    personalData: {
      type: "object",
      properties: {
        age: {
          type: "integer",
          description: "Please enter your age.",
        },
        height: {
          type: "number",
        },
        drivingSkill: {
          type: "number",
          maximum: 10,
          minimum: 1,
          default: 7,
        },
        vaccinations: {
          type: "array",
          items: {
            type: "object",
            properties: {
              brand: {
                type: "string",
                enum: [
                  "Pfizer",
                  "Moderna",
                  "Johnson & Johnson",
                  "Merck & Co., Inc",
                ],
              },
              dose: {
                type: "integer",
                minimum: 1,
              },
              disease: {
                type: "string",
              },
            },
          },
        },
      },
      required: ["age", "height"],
    },
    occupation: {
      type: "string",
    },
    postalCode: {
      type: "string",
      maxLength: 5,
    },
  },
  required: ["occupation", "nationality"],
};

export default dataSchema;
