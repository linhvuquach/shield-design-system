#!/bin/bash
echo "Moving storybook-static to public..."
public_folder="./public/storybook"
if [ -d "$public_folder" ];then
  echo "deleting $public_folder."
  rm -rf $public_folder
fi
mv "./storybook-static" $public_folder
move_status=$?
if [ $move_status -eq 0 ];then
  echo "Moving of files completed"
else
  echo "Cannot move folder"
fi