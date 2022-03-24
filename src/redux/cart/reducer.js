import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart' ,
    initialState: {
        authorize:false,
        users:[
            {login:"admin",pass:"admin"}
        ],
        contacts:[
            {id:1, website:'google.com',name:'Kirill',company:"google"},
            {id:2, website:'mail.ru',name:'Alexandr',company:"mailRuGroup"},
            {id:3, website:'yandex.ru',name:'Gennadiy',company:"Yandex"}
        ]
    },
    reducers:{
        RegisterUser: (state,action) => {
            state.users.push(action.payload);

        },
        DeleteUser: (state,action) => {
            state.contacts = state.contacts.filter(elem => elem.id !== action.payload.id)
        },
        UpdateContact: (state,action) => {
            state.contacts = state.contacts.map(elem => elem.id === action.payload.id?
                action.payload : elem )
        },
        AddContacting: (state,action) => {
            state.contacts.push(action.payload);

        },
        Authorize: (state) => {
            state.authorize = true;

        },
        UnAuthorize: (state) => {
            state.authorize = false;

        },


    }
});

export const {AddContacting,UpdateContact,DeleteUser,RegisterUser,Authorize,UnAuthorize} = cartSlice.actions;
export default cartSlice.reducer;
export const initialState = cartSlice.getInitialState;