export const Images ={
    trip_banner: require('./images/4.png'),
    empty_trip:require('./images/empty.webp'),
    empty_expense:require('./images/empt.jpg'),
    add_exp:require('./images/ae.jpg')

};
export const iconn={
    Back: require('./icon/ic1.png'),
};

export const thumbnailss ={
    0: require('./images/trip-thumbnail/tt1.jpg'),
    1: require('./images/trip-thumbnail/tt2.png'),
    2: require('./images/trip-thumbnail/tt3.png'),
    3: require('./images/trip-thumbnail/tt4.jpg'),
    4: require('./images/trip-thumbnail/5.jpeg'),
};
export const Randon_thumbnail=()=>{
    const rand = Math.floor(Math.random()*4);
    return thumbnailss[rand];
}