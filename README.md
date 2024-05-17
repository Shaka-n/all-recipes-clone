# Remix Setup:

## install runtime dependencies
npm i @remix-run/node @remix-run/react @remix-run/serve isbot@4 react react-dom

## install dev dependencies
npm i -D @remix-run/dev vite
Run the remix app:

```shellscript
npm run dev
```

# Flask Server Setup
In short, you need python3

## Prerequisites (MacOS)
- Homebrew

### Install Python3
```shellscript
brew install python
```
Make sure you have python 3.8 or newer

## Create and Activate Virtual Python Env
```shellscript
cd "~/all-recipes-clone/"
python3 -m venv .venv
. .venv/bin/activate
```
## Install Flask
```shellscript
pip install Flask
```
## Run the Flask server
```shellscript
flask --app api/index.py run 
```


