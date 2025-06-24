import {createSlice} from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name:"blog",
    initialState:{
        blog:null,
        yourBlog:null
    },
    reducers:{
        //actions
        setBlog:(state, action) => {
            state.blog = action.payload;
            
        },
        setLoading:(state, action) => {
            state.loading = action.payload;
        },

    }
});

export const {setBlog, setLoading} = blogSlice.actions;
export default blogSlice.reducer;