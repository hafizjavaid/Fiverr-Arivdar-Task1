<template>
  <section class="products">
    <!-- Form Code -->
    <b-container>
      <div class="main_form">
        <h3 class="text-center">{{ save ? "Create" : "Update" }} Product</h3>
        <b-row>
          <b-col>
            <b-form id="form">
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Name" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      type="text"
                      v-model="$v.form.pName.$model"
                      :class="{ 'is-invalid': validationStatus($v.form.pName) }"
                      placeholder="Product name"
                      autocomplete="off"
                      v-on:keypress="isLetter($event)"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.pName.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Product Name is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Meta Description" label-for="input-2">
                    <b-form-textarea
                      id="input-2"
                      type="text"
                      v-on:keypress="isLetter($event)"
                      v-model="$v.form.pDescription.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.pDescription),
                      }"
                      placeholder="Short description"
                      no-resize
                      autocomplete="off"
                    ></b-form-textarea>
                    <b-form-invalid-feedback
                      v-if="!$v.form.pDescription.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Product Description is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="SKU Number" label-for="input-3">
                    <b-form-input
                      id="input-3"
                      type="number"
                      v-model="$v.form.skuNumber.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.skuNumber),
                      }"
                      placeholder="SKU number"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.skuNumber.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The SKU Number is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Barcode Number" label-for="input-4">
                    <b-form-input
                      id="input-4"
                      type="number"
                      v-model="$v.form.barCode.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.barCode),
                      }"
                      placeholder="Barcode number"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.barCode.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The SKU Number is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Product Description" label-for="input-5">
                    <vue-editor
                      v-model="form.DDescription"
                      :editor-toolbar="customToolbar"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- form.DFeatures -->
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Features" label-for="input-5">
                    <vue-editor
                      v-model="form.DFeatures"
                      :editor-toolbar="customToolbar"
                    />
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Price" label-for="input-6">
                    <b-form-input
                      id="input-6"
                      type="number"
                      step="0.01"
                      v-model="$v.form.DPrice.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.DPrice),
                      }"
                      placeholder="Product Price"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.DPrice.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Product Price is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group>
                    <div class="imges">
                      <template v-if="images.length">
                        <div class="img" v-for="(img, i) in images" :key="i">
                          <img :src="img" alt="" />
                        </div>
                      </template>
                      <div class="icon" @click="onFilePicked2">
                        <span>
                          <svg
                            width="74"
                            height="74"
                            viewBox="0 0 74 74"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M67.0625 60.125H6.9375C6.32419 60.125 5.73599 59.8814 5.30232 59.4477C4.86864 59.014 4.625 58.4258 4.625 57.8125V18.5C4.625 17.8867 4.86864 17.2985 5.30232 16.8648C5.73599 16.4311 6.32419 16.1875 6.9375 16.1875H21.8762L25.8306 10.2906C26.0401 9.97252 26.3249 9.71108 26.6598 9.52953C26.9946 9.34799 27.3691 9.25197 27.75 9.25H46.25C46.6309 9.25197 47.0054 9.34799 47.3402 9.52953C47.6751 9.71108 47.9599 9.97252 48.1694 10.2906L52.1238 16.1875H67.0625C67.6758 16.1875 68.264 16.4311 68.6977 16.8648C69.1314 17.2985 69.375 17.8867 69.375 18.5V57.8125C69.375 58.4258 69.1314 59.014 68.6977 59.4477C68.264 59.8814 67.6758 60.125 67.0625 60.125ZM9.25 55.5H64.75V20.8125H50.875C50.4941 20.8105 50.1196 20.7145 49.7848 20.533C49.4499 20.3514 49.1651 20.09 48.9556 19.7719L45.0012 13.875H28.9988L25.0444 19.7719C24.8349 20.09 24.5501 20.3514 24.2152 20.533C23.8804 20.7145 23.5059 20.8105 23.125 20.8125H9.25V55.5Z"
                              fill="black"
                            />
                            <path
                              d="M37 50.875C34.2558 50.875 31.5732 50.0612 29.2915 48.5366C27.0097 47.012 25.2313 44.8451 24.1812 42.3097C23.131 39.7744 22.8562 36.9846 23.3916 34.2931C23.927 31.6016 25.2484 29.1294 27.1889 27.1889C29.1293 25.2484 31.6016 23.927 34.2931 23.3916C36.9846 22.8562 39.7744 23.131 42.3097 24.1812C44.8451 25.2313 47.012 27.0097 48.5366 29.2915C50.0612 31.5732 50.875 34.2558 50.875 37C50.875 40.6799 49.4132 44.209 46.8111 46.8111C44.209 49.4132 40.6799 50.875 37 50.875ZM37 27.75C35.1705 27.75 33.3821 28.2925 31.861 29.3089C30.3398 30.3253 29.1542 31.77 28.4541 33.4602C27.754 35.1504 27.5708 37.0103 27.9277 38.8046C28.2847 40.5989 29.1656 42.2471 30.4593 43.5407C31.7529 44.8344 33.4011 45.7154 35.1954 46.0723C36.9897 46.4292 38.8496 46.246 40.5398 45.5459C42.23 44.8458 43.6747 43.6602 44.6911 42.139C45.7075 40.6179 46.25 38.8295 46.25 37C46.25 34.5468 45.2754 32.194 43.5407 30.4593C41.806 28.7246 39.4533 27.75 37 27.75Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="file"
                        id="imgFile"
                        class="input-control"
                        style="display: none"
                        ref="fileInput2"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="imgPicked2"
                      />
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Width" label-for="input-7">
                    <b-form-input
                      id="input-7"
                      type="number"
                      v-model="$v.form.DWidth.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.DWidth),
                      }"
                      placeholder="Product Width"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.DWidth.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Product Width is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Height" label-for="input-8">
                    <b-form-input
                      id="input-8"
                      type="number"
                      v-model="$v.form.DHeight.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.DHeight),
                      }"
                      placeholder="Product Height"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.DHeight.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Product Height is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Weight" label-for="input-8">
                    <b-form-input
                      id="input-8"
                      type="number"
                      v-model="$v.form.DWeight.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.DWeight),
                      }"
                      placeholder="Product Weight"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.DWeight.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Product Weight is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Shipping Price" label-for="input-8">
                    <b-form-input
                      id="input-8"
                      type="number"
                      step="0.01"
                      v-model="$v.form.SPrice.$model"
                      :class="{
                        'is-invalid': validationStatus($v.form.SPrice),
                      }"
                      placeholder="Shipping Price"
                      no-resize
                      autocomplete="off"
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="!$v.form.SPrice.required"
                      class="invalid-feedback text-left mt-3"
                    >
                      The Shipping Price is required
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Product Tags" label-for="input-9">
                    <vue-tags-input
                      v-model="form.tag"
                      :tags="form.tags"
                      @tags-changed="(newTags) => (form.tags = newTags)"
                      id="tag_input"
                    />
                    <!-- {{ form.tags }} -->
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- Single Input -->
              <!-- Single Input -->
              <!-- Variations Input-->
              <b-row>
                <b-col>
                  <b-form-group label="Variation" label-for="input-9">
                    <div class="variations">
                      <div
                        class="variation v_tabs"
                        @click="addActive(1)"
                        :class="{ active: active == 1 }"
                      >
                        Color
                      </div>
                      <div
                        class="variation v_tabs"
                        @click="addActive(2)"
                        :class="{ active: active == 2 }"
                      >
                        Storage
                      </div>
                      <div
                        class="variation v_tabs"
                        @click="addActive(3)"
                        :class="{ active: active == 3 }"
                      >
                        Stock Price
                      </div>
                      <div
                        class="variation v_tabs"
                        @click="addActive(4)"
                        :class="{ active: active == 4 }"
                      >
                        Bundles
                      </div>
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->

              <!-- Variations Selected Input-->
              <b-row>
                <b-col>
                  <b-form-group v-show="active == 1">
                    <b-form-radio
                      v-model="tempvariations.colorSelected"
                      name="color"
                      value="red"
                      >Red</b-form-radio
                    >
                    <b-form-radio
                      v-model="tempvariations.colorSelected"
                      name="color"
                      value="blue"
                      >Blue</b-form-radio
                    >
                  </b-form-group>
                  <b-form-group v-show="active == 2">
                    <b-form-radio
                      v-model="tempvariations.storageSelected"
                      name="storage"
                      value="permanent"
                      :checked="tempvariations.storageSelected"
                      >Permanent</b-form-radio
                    >
                    <b-form-radio
                      v-model="tempvariations.storageSelected"
                      name="storage"
                      value="temporary"
                      :checked="tempvariations.storageSelected"
                      >Temporary</b-form-radio
                    >
                  </b-form-group>
                  <b-form-group v-show="active == 3">
                    <!-- <label for="" id="p_label">Price</label> -->
                    <b-form-input
                      v-model="tempvariations.priceSelected"
                      placeholder="Enter Price"
                      type="number"
                    ></b-form-input>
                    <br />
                    <!-- <label for="" id="s_label">Stock</label> -->
                    <b-form-input
                      v-model="tempvariations.stockSelected"
                      placeholder="Enter Your Stock"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group v-show="active == 4">
                    <b-form-input
                      v-model="tempvariations.prize"
                      placeholder="Enter Prize"
                      type="number"
                    ></b-form-input>
                    <br />
                    <b-form-input
                      v-model="tempvariations.quantity"
                      placeholder="Enter Your Quantity"
                      type="number"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- Show tempvariations -->
              <b-row>
                <b-col>
                  <b-form-group label-for="input-10">
                    <div
                      v-for="(variation, i) in form.variations"
                      :key="i"
                      class="variations"
                    >
                      <div
                        class="variation"
                        v-if="variation.colorSelected != ''"
                      >
                        {{ variation.colorSelected }}
                      </div>
                      <div
                        class="variation"
                        v-if="variation.priceSelected != ''"
                      >
                        {{ variation.priceSelected }}
                      </div>
                      <div
                        class="variation"
                        v-if="variation.stockSelected != ''"
                      >
                        {{ variation.stockSelected }}
                      </div>
                      <div
                        class="variation"
                        v-if="variation.storageSelected != ''"
                      >
                        {{ variation.storageSelected }}
                      </div>
                      <div class="variation" v-if="variation.prize != ''">
                        {{ variation.prize }}
                      </div>
                      <div class="variation" v-if="variation.quantity != ''">
                        {{ variation.quantity }}
                      </div>
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- STore tempvariations -->
              <b-row>
                <b-col>
                  <b-button class="store_btn" @click="savetempvariations"
                    >Store</b-button
                  >
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button
                    v-if="save"
                    type="submit"
                    class="save_btn"
                    @click.prevent="saveForm"
                    >Save</b-button
                  >
                  <b-button
                    v-else
                    type="submit"
                    class="save_btn"
                    @click.prevent="updateP"
                    >Update</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <!-- Form Code -->
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import VueTagsInput from "@johmun/vue-tags-input";
import { VueEditor } from "vue2-editor";
export default {
  mixins: [validationMixin],
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      customToolbar: [
        // [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ color: ["red", "green"] }, { background: [] }],
      ],
      img1: require("@/assets/products/1.jpg"),
      save: true,
      editIndex: -1,
      active: 1,
      img2: null,
      showTarget: false,
      images: [],
      tempvariations: {
        colorSelected: "",
        priceSelected: "",
        stockSelected: "",
        storageSelected: "",
        prize: "",
        quantity: "",
      },
      form: {
        pName: "",
        pDescription: "",
        DDescription: "",
        DFeatures: "",
        skuNumber: "",
        barCode: "",
        DHeight: "",
        DWidth: "",
        DPrice: "",
        DWeight: "",
        SPrice: "",
        tag: "",
        tags: ["12"],
        img: [],
        variations: [],
      },
    };
  },
  validations: {
    form: {
      pName: {
        required,
        // minLength: minLength(3),
      },
      pDescription: {
        required,
        // minLength: minLength(3),
      },
      skuNumber: {
        required,
        // minLength: minLength(3),
      },
      barCode: {
        required,
        // minLength: minLength(3),
      },
      DDescription: {
        required,
        // minLength: minLength(3),
      },
      DFeatures: {
        required,
        // minLength: minLength(3),
      },
      DPrice: {
        required,
        // minLength: minLength(3),
      },
      DHeight: {
        required,
        // minLength: minLength(3),
      },
      DWidth: {
        required,
        // minLength: minLength(3),
      },
      SPrice: {
        required,
        // minLength: minLength(3),
      },
      DWeight: {
        required,
        // minLength: minLength(3),
      },
    },
  },
  components: {
    // require
    VueTagsInput,
    VueEditor,
  },
  methods: {
    saveForm() {
      this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;
      let tempTags = [];
      for (let i = 0; i < this.form.tags.length; i++) {
        for (let key in this.form.tags[i]) {
          if (
            typeof this.form.tags[i][key] == "string" ||
            typeof this.form.tags[i][key] == "number"
          ) {
            tempTags.push(this.form.tags[i][key]);
          }
        }
      }

      this.form.id = this.$store.getters.getProductsLenght + 1;
      this.form.img = this.images[0];
      this.form.tags = tempTags;
      // this.form.variations.push(tempvariations);
      this.$store.dispatch("addProduct", this.form);

      this.$router.push({ name: "Products" }, { path: "/products" });
    },
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    delProduct(i) {
      this.Products.splice(i, 1);
    },
    updateP() {
      let id = this.$route.params.id;
      let tempTags = [];
      for (let i = 0; i < this.form.tags.length; i++) {
        // console.log();
        if (typeof this.form.tags[i] == "object") {
          for (let key in this.form.tags[i]) {
            if (
              typeof this.form.tags[i][key] == "string" ||
              typeof this.form.tags[i][key] == "number"
            ) {
              tempTags.push(this.form.tags[i][key]);
            }
          }
        } else {
          tempTags.push(this.form.tags[i]);
        }
      }

      this.form.tags = tempTags;
      // this.form.variations = this.variations;
      //   console.log(this.form.variations);
      let tempProduct = this.form;
      tempProduct.id = id;
      this.$store.dispatch("updateProduct", {
        product: tempProduct,
        index: this.$store.getters.getIndex(this.$route.params.id),
      });
      this.$router.push({ name: "Products" }, { path: "/products" });
    },
    addActive(i) {
      this.active = i;
    },
    onFilePicked2() {
      this.$refs.fileInput2.click();
    },
    imgPicked2(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      //   console.log(files);
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.img2 = fileReader.result;
        // console.log(this.img2);
        this.images.push(this.img2);
      });

      fileReader.readAsDataURL(files[0]);
      //   this.img2 = files[0];
    },
    savetempvariations() {
      // this.showTarget = true;
      this.form.variations.push(this.tempvariations);
      console.log(this.form.variations);
      console.log(this.tempvariations);
      this.tempvariations = {
        colorSelected: "",
        priceSelected: "",
        stockSelected: "",
        storageSelected: "",
        prize: "",
        quantity: "",
      };
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[a-zA-Z ]*$/.test(char)) return true;
      else e.preventDefault();
    },
    isNumber(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9\s]*$/.test(char)) return true;
      else e.preventDefault();
    },
  },
  computed: {},
  created() {
    let sProduct = this.$store.getters.getProduct(this.$route.params.id);
    if (this.$route.params.edit) {
      this.save = true;
    } else {
      this.save = false;
    }
    if (sProduct) {
      this.form = sProduct;
      // this.variations = sProduct.variations;
      let image = sProduct.img;
      this.images.push(image);
    }
  },
};
</script>

<style scoped>
.main_form {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  padding-top: 30px;
  font-family: "Open Sans", sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding-bottom: 20px;
}
.main_form form {
  max-width: 90%;
  margin: auto;
}
.main_form h3 {
  margin-bottom: 40px;
}
.variations {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
}
.variations .variation {
  background: #aeaeae;
  max-width: 70px;
  height: 30px;
  color: #fff;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 10px;
  width: 100%;
  text-transform: capitalize;
  cursor: pointer;
  margin-bottom: 10px;
}
.variations .v_tabs {
  font-weight: bold;
  font-size: 14px;
  max-width: 100px;
  height: 40px;
}
.variations .variation.active {
  background-color: #38485f;
}
.save_btn,
.store_btn {
  background-color: #38485f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  max-width: 150px;
  height: 40px;
  background: #38485f;
  border-radius: 37.5px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
}
.store_btn {
  margin-top: 10px;
  width: 100%;
  max-width: 100px;
  height: 30px;
  margin-left: 0px;
  transform: translateY(-10px);
  font-size: 16px;
  font-weight: normal;
}
.imges {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
}
.img {
  width: 100px;
  height: 100px;
  border: 1px dashed #000;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #000;
  height: 100px;
}
.custom-radio {
  text-align: left;
  font-size: 16px;
}
#p_label,
#s_label {
  text-align: left;
  font-size: 12px;
}
</style>