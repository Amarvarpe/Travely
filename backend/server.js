const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User'); // Import User model
const HotelBooking = require('./models/HotelBooking'); // Import HotelBooking model



const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listener for successful connection
mongoose.connection.once('open', () => {
  console.log('MongoDB is connected successfully.');
});

// Event listener for connection error
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Sign Up Route
app.post('/api/register', async (req, res) => {
  const { email, password, name, mobile, address } = req.body;

  try {
    // Log the plain text password for debugging purposes (REMOVE IN PRODUCTION)
    console.log('Plain text password:', password);

    // Check if all fields are provided
    if (!email || !password || !name || !mobile || !address) {
      return res.status(400).send('All fields are required');
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      mobile,
      address,
      email,
      password: hashedPassword,
    });

    // Save user to the database
    await newUser.save();
    res.status(200).send('User registered successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

// Sign In Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid email or password.');

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid email or password.');

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

// Hotel Booking Schema
const hotelBookingSchema = new mongoose.Schema({
  location: String,
  checkInDate: String,
  checkOutDate: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Associate with user
});

//const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema);

// Hotel Booking Route
app.post('/api/bookings', async (req, res) => {
  const { location, checkInDate, checkOutDate, userId } = req.body;

  try {
    console.log('Request Body:', req.body);

    // Check if all fields are provided
    if (!location || !checkInDate || !checkOutDate || !userId) {
      return res.status(400).send('All fields are required');
    }

    // Find user by email
    const user = await User.findOne({ email: userId }); // `userId` contains the email
    if (!user) {
      return res.status(404).send('User not found'); // If user doesn't exist
    }

    // Create new booking using the user's ObjectId
    const newBooking = new HotelBooking({
      location,
      checkInDate,
      checkOutDate,
      userId: user._id, // Use the ObjectId from the User document
    });

    // Save booking to the database
    await newBooking.save();
    console.log('Booking saved successfully:', newBooking);

    res.status(200).send('Hotel booking saved successfully!');
  } catch (err) {
    console.error('Error saving booking:', err.message);
    res.status(500).send('Hotel booking saved successfully!');
  }
});



// Get All Bookings for a User
app.get('/api/bookings/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find bookings by userId
    const bookings = await HotelBooking.find({ userId });
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving bookings');
  }
});


// Tour Packages Schema
const tourPackageSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  startDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  members: { type: Number, required: true },
});

const TourPackage = mongoose.model('TourPackage', tourPackageSchema);

// API Route to Add Tour Packages
app.post('/api/tour_packages', async (req, res) => {
  const {from, to, duration, startDate, members } = req.body;

  try {
    // Check if all fields are provided
    if (!from || !to || !startDate || !duration || !members) {
      return res.status(400).send('All fields are required');
    }

    // Create a new tour package
    const newPackage = new TourPackage({
      from,
      to,
      startDate,
      duration,
      members,
    });

    // Save to the database
    await newPackage.save();
    res.status(200).send('Tour package saved successfully!');
  } catch (err) {
    console.error('Error saving tour package:', err.message);
    res.status(500).send('Error saving tour package');
  }
});

// API Route to Retrieve Tour Packages
app.get('/api/tour_packages', async (req, res) => {
  try {
    const packages = await TourPackage.find();
    res.status(200).json(packages);
  } catch (err) {
    console.error('Error retrieving tour packages:', err.message);
    res.status(500).send('Error retrieving tour packages');
  }
});

const bookings = [];

// Mongoose Schema and Model
const vehicleBookingSchema = new mongoose.Schema({
  vehicle: { type: String, required: true },
  location: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // Assuming userId refers to a User model
});

const VehicleBooking = mongoose.model("VehicleBooking", vehicleBookingSchema);

// POST route to handle vehicle bookings
app.post("/api/vehicle_bookings", async (req, res) => {
  const { vehicle, location, userId } = req.body;

  // Validate request
  if (!vehicle || !location || !userId) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Save booking to MongoDB
    const newBooking = new VehicleBooking({ vehicle, location, userId });
    await newBooking.save();

    res.status(201).json({ message: "Booking saved successfully!", booking: newBooking });
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).json({ message: "Failed to save booking. Please try again later." });
  }
});







// Train Booking Schema
const trainBookingSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date }, // Optional
  trainClass: { type: String, required: true },
  passengers: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const TrainBooking = mongoose.model('TrainBooking', trainBookingSchema);
app.post('/api/train_bookings', async (req, res) => {
  const { from, to, departureDate, returnDate, trainClass, passengers, email } = req.body;

  try {
    // Validate input
    if (!from || !to || !departureDate || !trainClass || !passengers || !email) {
      return res.status(400).send('All fields are required');
    }

    // Find the user by email instead of userId
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Create a new train booking using user._id
    const newBooking = new TrainBooking({
      from,
      to,
      departureDate,
      returnDate,
      trainClass,
      passengers,
      userId: user._id, // Use the ObjectId from the User document
    });

    // Save booking to the database
    await newBooking.save();
    res.status(200).send({ message: 'Train booking successful!', booking: newBooking });
  } catch (err) {
    console.error('Error saving train booking:', err.message);
    res.status(500).send('Error saving train booking');
  }
});


// Middleware to verify JWT token
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'secretkey');
    req.user = decoded; // Attach decoded user info to request object
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Get user details route
app.get('/api/user', authenticateUser, async (req, res) => {
  try {
    // Find user by ID stored in the token
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err.message);
    res.status(500).json({ message: 'Error fetching user details' });
  }
});


// Start Server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
