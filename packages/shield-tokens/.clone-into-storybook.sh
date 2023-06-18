#!/bin/bash
source_dist="./dist"
dest_folder="../../apps/shield-react/styles/tokens"
if [ -d $source_dist ]; then
  mkdir -p $dest_folder
  if [ -f "$dest_folder/index.css" ]; then
      echo "deleting $dest_folder."
      rm -f $dest_folder/*
  fi
  # shellcheck disable=SC2045
  for i in `ls -r $source_dist/*`; do
    echo "copying into $dest_folder..."
    cp -v "$i" "$dest_folder"
  done
fi