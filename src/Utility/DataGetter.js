import productModel from "../Model/productModel"

const DataGetter = async (data) => {
  const result = await productModel.findById(data);
if(result) return result;
return result = "Error";
}

export default DataGetter