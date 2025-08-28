const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files serve (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to handle form submission
app.post("/subscribe", (req, res) => {
    const { fullname, email, course } = req.body;

    console.log("New Subscription:", fullname, email, course);

    // Server se response bhejna
    res.json({ message: `Thank you ${fullname}, you subscribed for ${course}!` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
