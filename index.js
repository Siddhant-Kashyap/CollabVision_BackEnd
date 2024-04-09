const express = require('express')
const connectDB = require('./utils/dbConnection')
const userRoutes = require('./routes/user.route')
const taskRoutes = require("./routes/task.routes")
const projectRoutes = require("./routes/project.routes")
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
const PORT = 8001;

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/task',taskRoutes)
app.use('/api/project',projectRoutes);


app.listen(PORT, () => {
    console.log("Server is up and running");
});
