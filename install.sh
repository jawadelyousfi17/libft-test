#!/bin/bash
SCRIPT_NAME="run_test.sh"
TARGET_DIR="/opt/libcc"
chmod +x "$SCRIPT_NAME"
sudo cp -r $(pwd) $TARGET_DIR
sudo ln -s /opt/libcc/run_test.sh /usr/bin/run_cc
echo "The script is installed and can be run using: run_cc"
