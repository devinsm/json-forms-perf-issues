const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/name",
        },
        {
          type: "Control",
          scope: "#/properties/personalData/properties/age",
        },
        {
          type: "Control",
          scope: "#/properties/birthDate",
        },
      ],
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/favoriteFoods",
        },
      ],
    },
    {
      type: "Label",
      text: "Additional Information",
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/height",
        },
        {
          type: "Control",
          scope: "#/properties/nationality",
        },
        {
          type: "Control",
          scope: "#/properties/occupation",
        },
      ],
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/personalData/properties/vaccinations",
          // options: {
          //   detail: 'GENERATED',
          // },
        },
        {
          type: "Control",
          scope: "#/properties/vegetarian",
        },
      ],
    },
  ],
};

export default uiSchema;
