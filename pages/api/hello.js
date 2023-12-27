// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Define the arrow function and assign it to a variable
const handler = (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

// Export the variable as the default export
export default handler;
