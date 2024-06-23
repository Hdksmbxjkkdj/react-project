import axios from "axios";

const ItemsSearch = () => {
    const searching = async (params, setVariable) => {
      axios.get(`http://localhost:313/best_selling?text_like=${params}`)
      .then((res) => {
          setVariable(res.data)
      })
    }

    return {searching}
}

export { ItemsSearch };
