import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface Price {
  currencyIso: string;
  formattedValue: string;
  displayformattedValue: string;
  value: number;
}

interface Image {
  altText: string;
  format: string;
  imageType: string;
  url: string;
}

interface ExtraImage {
  model: string;
  images: Image[];
}

interface Product {
  id: string;
  name: string;
  price: Price;
  code: string;
  wasPriceData: Price;
  offerPrice: Price;
  couponStatus: string;
  averageRating: number;
  ratingCount: string;
  discountPercent: string;
  brandName: string;
  colorGroup: string;
  allPromotions: boolean;
  images: Image[];
  extraImages: ExtraImage[];
  fnlColorVariantData: {
    brandName: string;
    outfitPictureURL: string;
    colorGroup: string;
  };
  fnlProductData: {
    planningCategory: string;
  };
  url: string;
  segmentNameText: string;
  verticalNameText: string;
  brickNameText: string;
}


interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',  // Changed from 'productSlice' to 'product' for clarity
  initialState,
  reducers: {
    // Action to add a product
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },

    setProducts: (state, action: PayloadAction<any>) => {
        state.products = action.payload;
    },
    // Action to remove a product by id
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    // Action to update a product
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

// Export actions
export const { addProduct, removeProduct, updateProduct, setProducts } = productSlice.actions;
// Export the reducer to be used in the store
export default productSlice.reducer;
