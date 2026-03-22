// --- Initial Product Data ---
const products = [
    { id: 1, name: "Sony WH-1000XM5 Noise Cancelling", price: 348.00, category: "audio", rating: 4.8, reviews: 1245, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Apple Watch Series 8", price: 399.00, category: "wearables", rating: 4.9, reviews: 3290, image: "https://images.unsplash.com/photo-1434493789847-2f02b32aca55?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "MacBook Pro 14\" M2", price: 1999.00, category: "accessories", rating: 4.9, reviews: 890, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Logitech MX Master 3S", price: 99.99, category: "accessories", rating: 4.7, reviews: 2150, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "JBL Flip 6 Portable Speaker", price: 129.95, category: "audio", rating: 4.6, reviews: 450, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Samsung Galaxy Watch 5", price: 279.00, category: "wearables", rating: 4.5, reviews: 1120, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "AirPods Pro (2nd Gen)", price: 249.00, category: "audio", rating: 4.8, reviews: 5430, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Keychron K2 Mechanical Keyboard", price: 79.99, category: "accessories", rating: 4.7, reviews: 890, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400" }
];

let cart = [];

// --- DOM Elements ---
const loader = document.getElementById('loader');
const productsGrid = document.getElementById('productsGrid');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Auth DOM
const loginBtn = document.getElementById('loginBtn');
const authModal = document.getElementById('authModal');
const closeModalBtn = document.getElementById('closeModal');
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after 1s
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    // Initialize products
    renderProducts(products);
    
    // Load Theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

// --- Theme Toggle (Dark Mode) ---
themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});

// --- Auth Modal Logic ---
const openModal = () => authModal.classList.add('active');
const closeModal = () => authModal.classList.remove('active');

loginBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeModal();
});

// Switch between Login/Signup Tabs
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(`${tab.dataset.tab}Form`).classList.add('active');
    });
});

// Mock Auth Submit Handlers
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login Successful! (Mock)');
    closeModal();
    e.target.reset();
});
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account Created Successfully! (Mock)');
    closeModal();
    e.target.reset();
});

// --- Products Rendering ---
function renderProducts(productArray) {
    productsGrid.innerHTML = '';
    
    if (productArray.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">No products found matching your criteria.</p>';
        return;
    }
    
    productArray.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i> ${product.rating} 
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="Add to Cart">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// --- Filtering & Searching ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        if (filter === 'all') {
            renderProducts(products);
        } else {
            const filteredProducts = products.filter(p => p.category === filter);
            renderProducts(filteredProducts);
        }
    });
});

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        // Reset to "All" category if search is empty
        document.querySelector('.filter-btn[data-filter="all"]').click();
        return;
    }
    
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );
    
    // Deactivate all filter buttons if searching
    filterBtns.forEach(b => b.classList.remove('active'));
    renderProducts(filteredProducts);
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// --- Shopping Cart Logic ---
const openCart = () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
};
const closeCart = () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
};

cartToggle.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Global wrapper for onclick attributes in dynamically created elements
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    openCart(); // Show cart when item added
};

window.updateQty = (productId, change) => {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
};

window.removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

function updateCartUI() {
    // Update Badge Count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Animate badge to highlight update
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
    
    // Update Sidebar content
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
        cartTotalPrice.textContent = '$0.00';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button class="qty-btn" aria-label="Decrease quantity" onclick="updateQty(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" aria-label="Increase quantity" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
    
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
}

// Checkout Button functionality
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Checkout successful! Total: ${cartTotalPrice.textContent}`);
    cart = [];
    updateCartUI();
    closeCart();
});
