// --- DOMContentLoaded इवेंट ---
// यह सुनिश्चित करता है कि हमारा जावास्क्रिप्ट कोड तभी चले जब पूरा HTML डॉक्यूमेंट लोड हो चुका हो।
document.addEventListener('DOMContentLoaded', () => {

    // --- प्रोडक्ट डेटा ---
    // एक वास्तविक ई-कॉमर्स साइट में, यह डेटा सर्वर या API से आएगा।
    // यहाँ, हम इसे सीखने के उद्देश्य से एक ऐरे (array of objects) में स्टोर कर रहे हैं।
    const products = [{
        id: 1,
        name: 'स्टाइलिश टी-शर्ट',
        price: 499,
        image: 'https://placehold.co/300x300/eee/ccc?text=T-Shirt'
    }, {
        id: 2,
        name: 'क्लासिक जूते',
        price: 1999,
        image: 'https://placehold.co/300x300/ddd/bbb?text=Shoes'
    }, {
        id: 3,
        name: 'ट्रेंडी घड़ी',
        price: 2499,
        image: 'https://placehold.co/300x300/ccc/aaa?text=Watch'
    }, {
        id: 4,
        name: 'डेनिम जींस',
        price: 1499,
        image: 'https://placehold.co/300x300/aaa/999?text=Jeans'
    }, {
        id: 5,
        name: 'सनग्लासेस',
        price: 799,
        image: 'https://placehold.co/300x300/999/888?text=Sunglasses'
    }, {
        id: 6,
        name: 'लेदर बैग',
        price: 2999,
        image: 'https://placehold.co/300x300/888/777?text=Bag'
    }, ];

    // --- शॉपिंग कार्ट ---
    // हम localStorage से कार्ट का डेटा प्राप्त करने का प्रयास करते हैं।
    // JSON.parse() स्ट्रिंग को वापस जावास्क्रिप्ट ऑब्जेक्ट (या ऐरे) में बदल देता है।
    // अगर localStorage में कुछ नहीं है, तो हम एक खाली ऐरे से शुरुआत करते हैं।
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // --- फंक्शन: प्रोडक्ट्स को पेज पर दिखाना (Render) ---
    function renderProducts() {
        const productList = document.getElementById('product-list');
        // अगर productList एलिमेंट पेज पर मौजूद नहीं है, तो फंक्शन को रोक दें।
        // यह सुनिश्चित करता है कि यह कोड केवल products.html पर ही चले।
        if (!productList) return;

        productList.innerHTML = ''; // पुराने कंटेंट को साफ करें।
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button class="btn add-to-cart-btn" data-id="${product.id}">कार्ट में जोड़ें</button>
            `;
            productList.appendChild(productCard);
        });
    }

    // --- फंक्शन: कार्ट को पेज पर दिखाना (Render) ---
    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartTotal = document.getElementById('cart-total');
        // यह सुनिश्चित करता है कि यह कोड केवल cart.html पर ही चले।
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = ''; // पुराने आइटम्स को साफ करें।
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>आपका कार्ट खाली है।</p>';
            cartTotal.style.display = 'none';
            return;
        }

        cartTotal.style.display = 'block';
        let totalPrice = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>
                <div class="item-quantity">
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
                </div>
                <div class="item-total">
                    <p>₹${itemTotal.toFixed(2)}</p>
                </div>
                <button class="remove-btn" data-id="${item.id}">हटाएं</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        document.getElementById('total-price').innerText = `₹${totalPrice.toFixed(2)}`;
    }

    // --- फंक्शन: कार्ट में आइटम जोड़ना ---
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity++; // अगर आइटम पहले से कार्ट में है, तो उसकी मात्रा बढ़ाएं।
        } else {
            cart.push({ ...product, quantity: 1 }); // नहीं तो, नया आइटम जोड़ें।
        }

        saveCart(); // हर बदलाव के बाद कार्ट को localStorage में सेव करें।
        alert(`${product.name} को कार्ट में जोड़ा गया है!`);
    }

    // --- फंक्शन: कार्ट से आइटम हटाना ---
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart(); // कार्ट को फिर से रेंडर करें।
    }

    // --- फंक्शन: आइटम की मात्रा बदलना ---
    function updateQuantity(productId, quantity) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity = quantity;
        }
        saveCart();
        renderCart();
    }

    // --- फंक्शन: कार्ट को localStorage में सेव करना ---
    function saveCart() {
        // localStorage में केवल स्ट्रिंग स्टोर की जा सकती है, इसलिए हम JSON.stringify का उपयोग करते हैं।
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // --- इवेंट लिस्नर्स ---
    document.body.addEventListener('click', (e) => {
        // अगर 'कार्ट में जोड़ें' बटन पर क्लिक होता है
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
        // अगर 'हटाएं' बटन पर क्लिक होता है
        if (e.target.classList.contains('remove-btn')) {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        }
    });

    document.body.addEventListener('change', (e) => {
        // अगर मात्रा वाले इनपुट में बदलाव होता है
        if (e.target.classList.contains('quantity-input')) {
            const productId = parseInt(e.target.dataset.id);
            const quantity = parseInt(e.target.value);
            if (quantity > 0) {
                updateQuantity(productId, quantity);
            }
        }
    });

    // --- पेज लोड पर फंक्शन्स को कॉल करना ---
    renderProducts();
    renderCart();

});
