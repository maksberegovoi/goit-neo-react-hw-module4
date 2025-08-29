import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import {useEffect, useState} from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import axios from "axios";
import Loader from "./components/Loader/Loader.jsx";
import toast from "react-hot-toast";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [page, setPage] = useState(1)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImgSrc, setSelectedImgSrc] = useState(null)
  const [selectedAlt, setSelectedAlt] = useState('')

  const fetchImages = async () => {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get("https://api.unsplash.com/search/photos/?client_id=6PTNtlyi9a_5tMdeM29V_3rZrnHFA219cFWwdErlECs", {
        params: {
          query: searchQuery,
          page: page,
          per_page: 20
        }
      })

      const {results} = response.data
      setImages([...images, ...results])

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
     setImages([])
   }

  const handleImageClick = (imgSrc, alt) => {
    setSelectedImgSrc(imgSrc)
    setSelectedAlt(alt || '')
    setModalIsOpen(true)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
    setSelectedImgSrc(null)
    setSelectedAlt('')
  }

  useEffect(() => {
    if(searchQuery) {
      fetchImages()
    }
  }, [searchQuery, page]);


  return (
    <div>
      <SearchBar onSubmit={handleSearch}/>
      {error && <ErrorMessage/>}
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <ImageGallery images={images} onImageClick={handleImageClick}/>
        <Loader loading={loading}/>
        {(!loading && images.length) && <LoadMoreButton page={page} setPage={setPage}/>}
      </section>
      <ImageModal isOpen={modalIsOpen} onRequestClose={handleCloseModal} imgSrc={selectedImgSrc} alt={selectedAlt} />
    </div>
  )
}

export default App
