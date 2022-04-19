const userSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    username: { type: "string" },

    email: { type: "string" },
    password: { type: "string" },
    scores: { type: "number" },
  },
  required: ["email"],
  additionalProperties: false,
};

export default userSchema;
