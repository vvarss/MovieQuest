# 🎬MovieQuest
A sleek, fast, and interactive React-based movie search application that delivers live search results using a movie API. 
Simply type a movie name, and get instant, dynamic suggestions with posters, descriptions, and more.

## 🚀 Features
* Live Search — Instant search results as you type
* Clean React UI — Lightweight, modern component structure
* API Powered — Fetches real-time movie data
* Responsive Design — Works across all devices
* Error Handling — Handles empty searches & API failures gracefully

## 🧠 How It Works
* The search input triggers an API fetch on every keystroke.
* Debouncing or controlled rendering ensures smooth updates.
* Results update instantly without page reloads.

## 🧩Code Snippet
```
const App = () => {
   const [movies,setMovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const searchMovies = async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();

     setMovies(data.Search);
  };
```

## ✨Output
<img width="1436" height="910" alt="image" src="https://github.com/user-attachments/assets/61bc0f23-fe8c-4729-9aa5-fb88a96ffd0f" />


## 🪜Installation steps
To clone the repository:
```
git clone https://github.com/vvarss/MovieQuest.git
```
Install dependencies:
```
npm install
```
Run locally:
```
npm start
```
