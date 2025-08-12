import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import {useEffect, useState} from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import axios from "axios";
import Loader from "./components/Loader/Loader.jsx";
import toast from "react-hot-toast";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton.jsx";

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [totalPhotos, setTotalPhotos] = useState(12)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)

  const fetchImages = async () => {
    try {
      setLoading(true)
      setError(false)
      setImages([])
      const response = await axios.get("https://api.unsplash.com/search/photos/?client_id=6PTNtlyi9a_5tMdeM29V_3rZrnHFA219cFWwdErlECs", {
        params: {
          query: searchQuery,
          page: page,
          per_page: 20
        }
      })

      const {total, total_pages, results} = response.data
      setImages(results)
      setTotalPhotos(total)
      setTotalPages(total_pages)
    } catch(e){
      setError(true)
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

   const handleSearch = search => {
     if (search.length < 1){
       return toast.error('You need to type something in search form before' +
         ' request...')
     }

     setSearchQuery(search)
   }

  useEffect(() => {
    if(searchQuery) {
      fetchImages()
    }
  }, [searchQuery]);



  return (
    <div>
      <SearchBar onSubmit={handleSearch}/>
      {error && <ErrorMessage/>}
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <ImageGallery images={images}/>
        {!loading && <LoadMoreButton/>}
        {loading && <Loader loading={loading}/>}
      </section>
    </div>
  )
}

export default App
