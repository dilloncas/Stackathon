import { configureStore } from '@reduxjs/toolkit'
import goodieBagSlice from './reducers'

export default configureStore({
  reducer: goodieBagSlice,
})
