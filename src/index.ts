import express from 'express';

const app = express();

app.get('/', (req: any, res: any) => {
  res.json(
    {
      message: 'Hello World from Typescript v33',
      date: new Date().toISOString()
    }
  );
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
})
