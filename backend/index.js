const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello")
})

const mongoURI = process.env.MONGOURI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/add-username', async (req, res) => {
  console.log("Helo");
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  try {
    const newUser = new User({ username });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', success: true });
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
