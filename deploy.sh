#!/bin/bash
#
# This script checks if you are connected to the network and the SMB share is available.
# If connected, it builds the project using pnpm (if available) or npm, 
# and then copies the build output to a specified SMB share.
#

# Set the SMB share destination. Update this to your actual SMB share mount point.
SMB_DEST="/Volumes/AlgeaCare/docs/"

# Prompt the user to confirm network connectivity.
read -p "Are you connected to the network and to the SMB-Share? (y/n): " response
if [[ "$response" != "y" && "$response" != "Y" ]]; then
    echo "Network not available. Exiting."
    exit 1
fi

# Check for pnpm; if not found, default to npm.
if command -v pnpm >/dev/null 2>&1; then
    echo "Using pnpm for build."
    build_cmd="pnpm run build"
else
    echo "Using npm for build."
    build_cmd="npm run build"
fi

# Build the project.
echo "Starting build..."
$build_cmd
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# Ensure build output directory exists; adjust 'build' to match your project.
if [ ! -d "out" ]; then
    echo "Build output directory 'out' not found. Exiting."
    exit 1
fi

# Copy the build files to the SMB share.
echo "Copying build files to SMB share at $SMB_DEST..."
cp -R out/* "$SMB_DEST"
if [ $? -eq 0 ]; then
    echo "Files copied successfully."
else
    echo "Failed to copy files."
fi