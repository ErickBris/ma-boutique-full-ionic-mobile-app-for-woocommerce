var config = {
    title: 'Boutique', // Title displayed in the app
    link: 'http://192.168.1.3/wp/', // Woocommerce homepage URL
    checkout: 'http://192.168.1.3/wp/index.php/checkout/', // Woocommerce checkout URL
    timeout: 20000, // Timeout of api calls in milliseconds
    api: {
        link: 'http://192.168.1.3/wp/'+'wc-api/v3/', // API link
        key: 'ck_ab881ffc26e2175cac94013c5276ff38be129a2c', // API customer key 
        secret: 'cs_83b1c7248210865e26856a29974200ee17bbf881', // API customer secret
        signature: 'HMAC-SHA1', // API signature algorithm
        version: '1.0' // OAuth Version
    },
    messages: { // HTML Allowed
        sale_text: 'Sale', // Text on the sale badge
        added_cart: 'Successfully added to your cart !', // Message to show when a product is added to cart
        exists_cart: 'Product already exist in your cart !', // Message to show when a product already exists in cart
        server: 'There was a problem connecting to the server !<br>Please try again later', // Message to show if there's no server connection
        no_internet: 'Please check your internet connection !', // Message to show if there's no internet connection
        empty: "There's no products in this categorie.", // Message to show if a categorie is empty
        empty_cart: "There's no item in your cart !", // Message to show if the user cart is empty
        empty_shop: "The shop is empty", // Message to show if the website have no categories
        error: 'There was an error' // Generic error message
    },
    views: { // Views title
        homePage: 'Boutique',
        cart: 'Cart'
    }
};
