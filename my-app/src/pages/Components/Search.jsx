import axios from "axios";

const ItemsSearch = () => {
  const searching = async (params, setVariable,setLoading) => {
    if (params === "") setVariable();
    else {
      setLoading(true)
      axios
        .get(`http://localhost:313/best_selling?text_like=${params}`)
        .then((res) => {
          console.log(res);
          setVariable(res.data);
          setLoading(false)
        });
    }
  };

  return { searching };
};

export { ItemsSearch };
