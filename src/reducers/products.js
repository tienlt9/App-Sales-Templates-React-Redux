var initialState =[
    {
        id:1,
        name:"iphone",
        image:"https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg",
        description:"iphone 11 pro max",
        price:1000000,
        inventory:3,
        rating:5
    },
    {
        id:2,
        name:"samsung",
        image:"https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/s/a/samsung-galaxy-note-2020-ultra_1_1.jpg",
        description:"samsung galaxy note 20 ultra",
        price:5000000,
        inventory:6,
        rating:4
    },
    {
        id:3,
        name:"xiaomi",
        image:"https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/600_xiaomi-mi-10-pro.jpg",
        description:"xiaomi mi 10 pro",
        price:29999,
        inventory:7,
        rating:4
    }
];

const products = (state = initialState, action) => {
    switch (action.type){
        default: return [...state];
    }

}

export default products;