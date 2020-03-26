export const environment = {
  production: true
};

const API = "https://pcsa57ebsj.execute-api.us-east-1.amazonaws.com/api";
export const products = {
  searchProducts: `${API}/products/search?query=`
};
export const categories = {
  listCategories: `${API}/products/categories`
};
