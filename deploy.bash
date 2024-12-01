#!/bin/bash

# Variables
REPO_DIR="/home/pi/algae-care/app"    # Path to your project on the Raspberry Pi
JAR_NAME="target/AlgaeCare.jar"         # Name of the generated JAR file

# Step 1: Navigate to the repository directory
echo "Navigating to repository directory..."
cd "$REPO_DIR" || { echo "Directory $REPO_DIR not found."; exit 1; }

# Step 2: Pull the latest changes from the repository
echo "Pulling latest changes..."
git pull || { echo "Failed to pull latest changes."; exit 1; }

# Step 3: Clean and build the project
echo "Building the project..."
# Maven build
mvn clean package -P release || { echo "Maven build failed."; exit 1; }
JAR_PATH="target/$JAR_NAME"

# Step 4: Stop the currently running application (optional)
echo "Stopping currently running application (if any)..."
pkill -f "$JAR_NAME"

# Step 5: Run the application
echo "Running the application..."
nohup java -jar "$JAR_PATH" > app.log 2>&1 &
# java -jar "./target/Trick17App.jar"

echo "Application started successfully."