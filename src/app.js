import express from "express";

const app = express();

// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);
// });

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

export default app;
