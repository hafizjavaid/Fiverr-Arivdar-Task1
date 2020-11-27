import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: {"name":"Gopal Singh","email":"gopal.khasria@gmail.com","permissions":1,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR29wYWwgU2luZ2giLCJlbWFpbCI6ImdvcGFsLmtoYXNyaWFAZ21haWwuY29tIiwicGVybWlzc2lvbnMiOjEsInRva2VuIjoiIn0.BGlvopl-kXYlWbmGlMeKmLlE6aHy4itQz8ktRy7UNA0","exp":1606239723},
    requrl:'http://localhost:8080/admin/api/',
    brand: [],
    model: [],
    product:[],
    variation: [],
    variationvalue: [],
    products: [
        {
          img: require("@/assets/products/1.jpg"),
          pName: "1223",
          pDescription: "kcn",
          DDescription: "nvdk",
          DFeatures: "vlksn",
          skuNumber: "kdjcvkl",
          barCode: "adlk",
          DHeight: "cnk",
          DWidth: "adkvkl",
          DPrice: "aklc",
          DWeight: "akldf",
          SPrice: "adflk",
          tag: "",
          tags: [],
          id: 1,
       variations: [],
        },
        {
          img: require("@/assets/products/2.jpg"),
          pName: "1223",
          pDescription: "kcn",
          DDescription: "nvdk",
          DFeatures: "vlksn",
          skuNumber: "kdjcvkl",
          barCode: "adlk",
          DHeight: "cnk",
          DWidth: "adkvkl",
          DPrice: "aklc",
          DWeight: "akldf",
          SPrice: "adflk",
          tag: "",
          tags: [],
          id: 2,
       variations: [],
        },
        {
          img: require("@/assets/products/3.jpg"),
          pName: "1223",
          pDescription: "kcn",
          DDescription: "nvdk",
          DFeatures: "vlksn",
          skuNumber: "kdjcvkl",
          barCode: "adlk",
          DHeight: "cnk",
          DWidth: "adkvkl",
          DPrice: "aklc",
          DWeight: "akldf",
          SPrice: "adflk",
          tag: "",
          tags: [],
          id: 3,
       variations: [],
        },
        {
          img: require("@/assets/products/4.jpg"),
          pName: "1223",
          pDescription: "kcn",
          DDescription: "nvdk",
          DFeatures: "vlksn",
          skuNumber: "kdjcvkl",
          barCode: "adlk",
          DHeight: "cnk",
          DWidth: "adkvkl",
          DPrice: "aklc",
          DWeight: "akldf",
          SPrice: "adflk",
          tag: "",
          tags: [],
          id: 4,
       variations: [],
        },
        {
          img: require("@/assets/products/5.jpg"),
          pName: "1223",
          pDescription: "kcn",
          DDescription: "nvdk",
          DFeatures: "vlksn",
          skuNumber: "kdjcvkl",
          barCode: "adlk",
          DHeight: "cnk",
          DWidth: "adkvkl",
          DPrice: "aklc",
          DWeight: "akldf",
          SPrice: "adflk",
          tag: "",
          tags: [],
          id: 5,
       variations: [],
        },
      ],
  },
  mutations: {
    setadmin(state, admin){
      state.admin = admin;
    },
    logout(state){
      state.admin = ''
    },
    setBrand(state, body){
      state.brand = body;
    },
    setModel(state, body){
      state.model = body;
    },
    setVariation(state, body){
      state.variation = body;
    },
    setVariationvalue(state, body){
      state.variationvalue = body
    },
    addProduct(state, payload)
    {
      state.products.push(payload);
    }
    ,
    updateProduct(state,payload) {
      state.products[payload.index] = payload.product;
    }
    ,
    delProduct(state,payload) {
      
      state.products.splice(payload, 1);
    }
  },
  getters:{
    getRequestOptions:( state ) => ( body, method ) => {
      var headers = new Headers();
      headers.append("Authorization", "bearer "+ state.admin.token);
      var requestOptions = {
        method,
        headers,
      };
      method != 'GET' ? requestOptions.body = body : null;
      return requestOptions
    },
    getProducts(state) {
      return state.products;
    },
    getProductsLenght(state) {
      return state.products.length;
    },      
    getProduct(state) {
      return (id) => {
        return state.products.find(product => {
          return product.id == id;
          })
        }
    },
    getIndex(state) {
      return (id) => {
        return state.products.findIndex(product => {
          return product.id == id;
          })
        }
    }

  },
  actions: {

    // Add Product
    addProduct({ commit }, payload)
    {
      commit("addProduct", payload);
    },
    // Update Product
    updateProduct({ commit }, payload)
    {
      commit("updateProduct", payload);
    },
    // Delete Product
    delProduct({ commit }, payload)
    {
      commit("delProduct", payload);
    }
  },
  modules: {
  }
})
