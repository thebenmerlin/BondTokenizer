// Bond Bazaar Pro - Main Application JavaScript

// Application State
const AppState = {
    currentView: 'dashboard',
    selectedBond: 'RELI001',
    orderType: 'buy',
    theme: 'light',
    user: {
        wallet: '0x7a8f...9c4d',
        kycStatus: 'verified'
    },
    lastUpdate: new Date()
};

// Sample Data
const BondsData = {
    "RELI001": {
        id: "RELI001",
        issuer: "Reliance Industries Ltd",
        series: "Series VII",
        totalAmount: 50000000000,
        tokenPrice: 1000,
        tokensIssued: 50000000,
        tokensAvailable: 12500000,
        couponRate: 7.25,
        maturity: "2027-03-15",
        creditRating: "AAA",
        sector: "Energy",
        currentPrice: 1032.50,
        yield: 6.98,
        duration: 2.8,
        lastTrade: "2025-09-04T16:45:00",
        volume24h: 2500000,
        marketCap: 51625000000
    },
    "HDFC002": {
        id: "HDFC002",
        issuer: "HDFC Bank Ltd",
        series: "Tier II Bond",
        totalAmount: 25000000000,
        tokenPrice: 1000,
        tokensIssued: 25000000,
        tokensAvailable: 8750000,
        couponRate: 8.15,
        maturity: "2029-07-20",
        creditRating: "AA+",
        sector: "Banking",
        currentPrice: 1018.75,
        yield: 7.89,
        duration: 3.2,
        lastTrade: "2025-09-04T16:42:00",
        volume24h: 1850000,
        marketCap: 25468750000
    },
    "TCS003": {
        id: "TCS003",
        issuer: "Tata Consultancy Services",
        series: "Digital Bond I",
        totalAmount: 15000000000,
        tokenPrice: 1000,
        tokensIssued: 15000000,
        tokensAvailable: 5250000,
        couponRate: 6.85,
        maturity: "2026-12-10",
        creditRating: "AAA",
        sector: "Technology",
        currentPrice: 1045.20,
        yield: 6.12,
        duration: 1.9,
        lastTrade: "2025-09-04T16:47:00",
        volume24h: 3200000,
        marketCap: 15678000000
    },
    "INFY004": {
        id: "INFY004",
        issuer: "Infosys Limited",
        series: "Green Bond",
        totalAmount: 20000000000,
        tokenPrice: 1000,
        tokensIssued: 20000000,
        tokensAvailable: 7500000,
        couponRate: 6.95,
        maturity: "2028-05-25",
        creditRating: "AA+",
        sector: "Technology",
        currentPrice: 1027.80,
        yield: 6.58,
        duration: 2.7,
        lastTrade: "2025-09-04T16:44:00",
        volume24h: 1950000,
        marketCap: 20556000000
    },
    "BAJF005": {
        id: "BAJF005",
        issuer: "Bajaj Finance Ltd",
        series: "NCD Series K",
        totalAmount: 12000000000,
        tokenPrice: 1000,
        tokensIssued: 12000000,
        tokensAvailable: 4200000,
        couponRate: 8.65,
        maturity: "2027-09-15",
        creditRating: "AA",
        sector: "Financial Services",
        currentPrice: 1012.30,
        yield: 8.42,
        duration: 2.1,
        lastTrade: "2025-09-04T16:41:00",
        volume24h: 1650000,
        marketCap: 12147600000
    }
};

const OrderBookData = {
    "RELI001": {
        bids: [
            {price: 1032.00, quantity: 50000, timestamp: "2025-09-04T16:47:30"},
            {price: 1031.75, quantity: 75000, timestamp: "2025-09-04T16:47:15"},
            {price: 1031.50, quantity: 100000, timestamp: "2025-09-04T16:47:00"},
            {price: 1031.25, quantity: 125000, timestamp: "2025-09-04T16:46:45"},
            {price: 1031.00, quantity: 200000, timestamp: "2025-09-04T16:46:30"}
        ],
        asks: [
            {price: 1032.50, quantity: 45000, timestamp: "2025-09-04T16:47:35"},
            {price: 1032.75, quantity: 65000, timestamp: "2025-09-04T16:47:20"},
            {price: 1033.00, quantity: 85000, timestamp: "2025-09-04T16:47:05"},
            {price: 1033.25, quantity: 110000, timestamp: "2025-09-04T16:46:50"},
            {price: 1033.50, quantity: 150000, timestamp: "2025-09-04T16:46:35"}
        ]
    },
    "HDFC002": {
        bids: [
            {price: 1018.00, quantity: 40000, timestamp: "2025-09-04T16:47:30"},
            {price: 1017.75, quantity: 60000, timestamp: "2025-09-04T16:47:15"},
            {price: 1017.50, quantity: 80000, timestamp: "2025-09-04T16:47:00"}
        ],
        asks: [
            {price: 1018.75, quantity: 35000, timestamp: "2025-09-04T16:47:35"},
            {price: 1019.00, quantity: 55000, timestamp: "2025-09-04T16:47:20"},
            {price: 1019.25, quantity: 75000, timestamp: "2025-09-04T16:47:05"}
        ]
    },
    "TCS003": {
        bids: [
            {price: 1044.50, quantity: 30000, timestamp: "2025-09-04T16:47:30"},
            {price: 1044.25, quantity: 45000, timestamp: "2025-09-04T16:47:15"}
        ],
        asks: [
            {price: 1045.20, quantity: 25000, timestamp: "2025-09-04T16:47:35"},
            {price: 1045.45, quantity: 40000, timestamp: "2025-09-04T16:47:20"}
        ]
    }
};

const PortfolioData = {
    totalValue: 2547500,
    totalInvested: 2450000,
    unrealizedGain: 97500,
    realizedGain: 45000,
    holdings: [
        {
            bondId: "RELI001",
            quantity: 1000,
            avgCost: 1025.00,
            currentValue: 1032500,
            unrealizedGain: 7500
        },
        {
            bondId: "HDFC002",
            quantity: 750,
            avgCost: 1015.00,
            currentValue: 764063,
            unrealizedGain: 2813
        },
        {
            bondId: "TCS003",
            quantity: 500,
            avgCost: 1040.00,
            currentValue: 522600,
            unrealizedGain: 2600
        }
    ]
};

const LiquidityPools = [
    {
        bondId: "RELI001",
        poolSize: 5000000000,
        apy: 12.5,
        participants: 2847,
        minStake: 10000
    },
    {
        bondId: "HDFC002",
        poolSize: 3200000000,
        apy: 14.2,
        participants: 1923,
        minStake: 10000
    },
    {
        bondId: "TCS003",
        poolSize: 2800000000,
        apy: 11.8,
        participants: 1654,
        minStake: 10000
    }
];

// Utility Functions
const formatCurrency = (amount, currency = '₹') => {
    return `${currency}${amount.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
};

const formatLargeCurrency = (amount, currency = '₹') => {
    if (amount >= 10000000) {
        return `${currency}${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
        return `${currency}${(amount / 100000).toFixed(1)}L`;
    }
    return formatCurrency(amount, currency);
};

const formatPercent = (value, decimals = 2) => {
    return `${value.toFixed(decimals)}%`;
};

// Toast Notification System
class ToastManager {
    constructor() {
        this.container = document.getElementById('toastContainer');
    }

    show(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <strong>${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
                <p>${message}</p>
            </div>
        `;

        this.container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease-in-out';
            setTimeout(() => {
                if (this.container.contains(toast)) {
                    this.container.removeChild(toast);
                }
            }, 300);
        }, duration);
    }
}

// Chart Management
class ChartManager {
    constructor() {
        this.charts = {};
    }

    createMarketChart() {
        const ctx = document.getElementById('marketChart');
        if (!ctx) return;

        const sectorData = Object.values(BondsData).reduce((acc, bond) => {
            if (!acc[bond.sector]) {
                acc[bond.sector] = { volume: 0, count: 0 };
            }
            acc[bond.sector].volume += bond.volume24h;
            acc[bond.sector].count += 1;
            return acc;
        }, {});

        if (this.charts.market) {
            this.charts.market.destroy();
        }

        this.charts.market = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(sectorData),
                datasets: [{
                    label: '24H Volume (₹Cr)',
                    data: Object.values(sectorData).map(s => s.volume / 10000000),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sector-wise Trading Volume'
                    }
                }
            }
        });
    }

    createPriceChart(bondId) {
        const ctx = document.getElementById('priceChart');
        if (!ctx) return;

        const priceHistory = this.generatePriceHistory(bondId);
        
        if (this.charts.price) {
            this.charts.price.destroy();
        }

        this.charts.price = new Chart(ctx, {
            type: 'line',
            data: {
                labels: priceHistory.map(p => new Date(p.date).toLocaleDateString()),
                datasets: [{
                    label: 'Price (₹)',
                    data: priceHistory.map(p => p.close),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Price (₹)'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: `${BondsData[bondId].issuer} Price History`
                    }
                }
            }
        });
    }

    createPortfolioChart() {
        const ctx = document.getElementById('portfolioChart');
        if (!ctx) return;

        const holdings = PortfolioData.holdings.map(h => {
            const bond = BondsData[h.bondId];
            return {
                label: bond.issuer,
                value: h.currentValue,
                sector: bond.sector
            };
        });

        if (this.charts.portfolio) {
            this.charts.portfolio.destroy();
        }

        this.charts.portfolio = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: holdings.map(h => h.label),
                datasets: [{
                    data: holdings.map(h => h.value),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Portfolio Allocation by Holding'
                    }
                }
            }
        });
    }

    createTrendsChart() {
        const ctx = document.getElementById('trendsChart');
        if (!ctx) return;

        if (this.charts.trends) {
            this.charts.trends.destroy();
        }

        this.charts.trends = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [{
                    label: 'Market Volume (₹Cr)',
                    data: [420, 445, 480, 465, 510, 495, 520, 535, 450],
                    borderColor: '#1FB8CD',
                    tension: 0.1,
                    yAxisID: 'y'
                }, {
                    label: 'Average Yield (%)',
                    data: [7.8, 7.6, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7.2],
                    borderColor: '#FFC185',
                    yAxisID: 'y1',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Volume (₹Cr)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                        title: {
                            display: true,
                            text: 'Yield (%)'
                        }
                    }
                }
            }
        });
    }

    createSectorChart() {
        const ctx = document.getElementById('sectorChart');
        if (!ctx) return;

        const sectorPerformance = {
            'Technology': 8.5,
            'Banking': -2.1,
            'Energy': 5.2,
            'Financial Services': 1.8
        };

        if (this.charts.sector) {
            this.charts.sector.destroy();
        }

        this.charts.sector = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(sectorPerformance),
                datasets: [{
                    label: 'Performance (%)',
                    data: Object.values(sectorPerformance),
                    backgroundColor: Object.values(sectorPerformance).map(v => 
                        v >= 0 ? '#1FB8CD' : '#B4413C'
                    )
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    title: {
                        display: true,
                        text: 'Sector Performance (YTD)'
                    }
                }
            }
        });
    }

    generatePriceHistory(bondId) {
        const bond = BondsData[bondId];
        const prices = [];
        let basePrice = bond.currentPrice;
        
        for (let i = 29; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            
            const volatility = (Math.random() - 0.5) * 20; // ±10 points max
            const price = Math.max(basePrice + volatility, basePrice * 0.95);
            
            prices.push({
                date: date.toISOString().split('T')[0],
                open: price,
                high: price * 1.01,
                low: price * 0.99,
                close: price,
                volume: Math.floor(Math.random() * 1000000) + 500000
            });
        }
        
        return prices;
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.currentView = 'dashboard';
        this.charts = new ChartManager();
        this.initializeNavigation();
    }

    initializeNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.dataset.view;
                this.navigateToView(view);
            });
        });
    }

    navigateToView(viewName) {
        console.log(`Navigating to view: ${viewName}`);
        
        // Update navigation state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeNavItem = document.querySelector(`[data-view="${viewName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Show selected view
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.add('active');
        }

        this.currentView = viewName;
        AppState.currentView = viewName;

        // Initialize view-specific functionality
        this.initializeView(viewName);
    }

    initializeView(viewName) {
        switch (viewName) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'trading':
                this.loadTradingView();
                break;
            case 'portfolio':
                this.loadPortfolioView();
                break;
            case 'analytics':
                this.loadAnalyticsView();
                break;
            case 'compliance':
                this.loadComplianceView();
                break;
        }
    }

    loadDashboard() {
        this.renderFeaturedBonds();
        setTimeout(() => this.charts.createMarketChart(), 200);
    }

    loadTradingView() {
        this.setupTradingInterface();
        setTimeout(() => {
            this.charts.createPriceChart(AppState.selectedBond);
            this.updateOrderBook();
        }, 200);
    }

    loadPortfolioView() {
        this.renderPortfolioHoldings();
        setTimeout(() => this.charts.createPortfolioChart(), 200);
    }

    loadAnalyticsView() {
        this.renderLiquidityPools();
        setTimeout(() => {
            this.charts.createTrendsChart();
            this.charts.createSectorChart();
        }, 200);
    }

    loadComplianceView() {
        // Compliance view is mostly static, no additional loading needed
        console.log('Compliance view loaded');
    }

    renderFeaturedBonds() {
        const container = document.getElementById('featured-bonds');
        if (!container) return;

        const bonds = Object.values(BondsData).slice(0, 4);
        container.innerHTML = bonds.map(bond => `
            <div class="bond-card" data-bond-id="${bond.id}">
                <div class="bond-header">
                    <div>
                        <div class="bond-title">${bond.id}</div>
                        <div class="bond-issuer">${bond.issuer}</div>
                    </div>
                    <div class="bond-rating">${bond.creditRating}</div>
                </div>
                <div class="bond-metrics">
                    <div class="metric">
                        <span class="metric-label">Current Price</span>
                        <span class="metric-value">${formatCurrency(bond.currentPrice)}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Yield</span>
                        <span class="metric-value">${formatPercent(bond.yield)}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Coupon Rate</span>
                        <span class="metric-value">${formatPercent(bond.couponRate)}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Maturity</span>
                        <span class="metric-value">${new Date(bond.maturity).getFullYear()}</span>
                    </div>
                </div>
                <div class="bond-footer">
                    <div class="bond-volume">Vol: ${formatLargeCurrency(bond.volume24h)}</div>
                    <button class="btn btn--primary btn--sm trade-btn" data-bond="${bond.id}">Trade</button>
                </div>
            </div>
        `).join('');

        // Add event listeners
        container.querySelectorAll('.trade-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const bondId = e.target.dataset.bond;
                AppState.selectedBond = bondId;
                this.navigateToView('trading');
            });
        });
    }

    setupTradingInterface() {
        const selectedBondSelect = document.getElementById('selectedBond');
        const orderTypeSelect = document.getElementById('orderType');
        const orderQuantityInput = document.getElementById('orderQuantity');
        const orderPriceInput = document.getElementById('orderPrice');
        const placeOrderBtn = document.getElementById('placeOrder');

        if (!selectedBondSelect) return;

        // Update bond selection
        selectedBondSelect.value = AppState.selectedBond;
        selectedBondSelect.addEventListener('change', (e) => {
            AppState.selectedBond = e.target.value;
            this.updateBondInfo();
            this.updateOrderBook();
            this.charts.createPriceChart(AppState.selectedBond);
        });

        // Order type change
        if (orderTypeSelect) {
            orderTypeSelect.addEventListener('change', (e) => {
                const limitPriceField = document.querySelector('.limit-price');
                if (limitPriceField) {
                    if (e.target.value === 'market') {
                        limitPriceField.classList.add('hidden');
                    } else {
                        limitPriceField.classList.remove('hidden');
                    }
                }
            });
        }

        // Order tabs
        document.querySelectorAll('.order-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.order-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                AppState.orderType = e.target.dataset.type;
                if (placeOrderBtn) {
                    placeOrderBtn.textContent = `Place ${AppState.orderType.charAt(0).toUpperCase() + AppState.orderType.slice(1)} Order`;
                }
            });
        });

        // Calculate order total
        const updateOrderTotal = () => {
            const quantity = parseInt(orderQuantityInput?.value) || 0;
            const price = parseFloat(orderPriceInput?.value) || BondsData[AppState.selectedBond].currentPrice;
            const total = quantity * price;
            const totalElement = document.getElementById('orderTotal');
            if (totalElement) {
                totalElement.textContent = formatCurrency(total);
            }
        };

        if (orderQuantityInput) orderQuantityInput.addEventListener('input', updateOrderTotal);
        if (orderPriceInput) orderPriceInput.addEventListener('input', updateOrderTotal);

        // Place order
        if (placeOrderBtn) {
            placeOrderBtn.addEventListener('click', () => {
                this.showOrderConfirmation();
            });
        }

        this.updateBondInfo();
    }

    updateBondInfo() {
        const bond = BondsData[AppState.selectedBond];
        const bondTitle = document.getElementById('bondTitle');
        const currentPrice = document.getElementById('currentPrice');
        const priceChange = document.getElementById('priceChange');

        if (bondTitle) bondTitle.textContent = `${bond.id} - ${bond.issuer}`;
        if (currentPrice) currentPrice.textContent = formatCurrency(bond.currentPrice);
        if (priceChange) {
            const change = ((bond.currentPrice - bond.tokenPrice) / bond.tokenPrice * 100);
            priceChange.textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
            priceChange.className = `price-change ${change >= 0 ? 'positive' : 'negative'}`;
        }

        // Update order price placeholder
        const orderPriceInput = document.getElementById('orderPrice');
        if (orderPriceInput) {
            orderPriceInput.placeholder = bond.currentPrice.toFixed(2);
        }
    }

    updateOrderBook() {
        const bond = AppState.selectedBond;
        const orderBook = OrderBookData[bond] || { bids: [], asks: [] };

        this.renderOrderBookSide('askOrders', orderBook.asks, 'ask');
        this.renderOrderBookSide('bidOrders', orderBook.bids, 'bid');

        // Update spread
        const spreadElement = document.getElementById('spread');
        if (spreadElement && orderBook.asks.length > 0 && orderBook.bids.length > 0) {
            const spread = orderBook.asks[0].price - orderBook.bids[0].price;
            spreadElement.textContent = formatCurrency(spread);
        }
    }

    renderOrderBookSide(containerId, orders, type) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = orders.map(order => `
            <div class="order-row ${type}">
                <span>${formatCurrency(order.price)}</span>
                <span>${order.quantity.toLocaleString()}</span>
                <span>${formatCurrency(order.price * order.quantity)}</span>
            </div>
        `).join('');
    }

    renderPortfolioHoldings() {
        const tbody = document.getElementById('holdingsTable');
        if (!tbody) return;

        tbody.innerHTML = PortfolioData.holdings.map(holding => {
            const bond = BondsData[holding.bondId];
            const gainLoss = holding.currentValue - (holding.avgCost * holding.quantity);
            const gainLossPercent = (gainLoss / (holding.avgCost * holding.quantity)) * 100;

            return `
                <tr>
                    <td><strong>${bond.id}</strong></td>
                    <td>${bond.issuer}</td>
                    <td>${holding.quantity.toLocaleString()}</td>
                    <td>${formatCurrency(holding.avgCost)}</td>
                    <td>${formatCurrency(bond.currentPrice)}</td>
                    <td>${formatCurrency(holding.currentValue)}</td>
                    <td class="${gainLoss >= 0 ? 'positive' : 'negative'}">
                        ${formatCurrency(gainLoss)} (${gainLossPercent >= 0 ? '+' : ''}${gainLossPercent.toFixed(2)}%)
                    </td>
                    <td>
                        <button class="btn btn--sm btn--primary action-btn">Sell</button>
                        <button class="btn btn--sm btn--outline action-btn">Details</button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    renderLiquidityPools() {
        const container = document.getElementById('liquidityPools');
        if (!container) return;

        container.innerHTML = LiquidityPools.map(pool => {
            const bond = BondsData[pool.bondId];
            return `
                <div class="pool-item">
                    <div class="pool-header">
                        <strong>${bond.issuer}</strong>
                        <span class="pool-apy">${formatPercent(pool.apy)} APY</span>
                    </div>
                    <div class="pool-details">
                        <div>Pool Size: ${formatLargeCurrency(pool.poolSize)}</div>
                        <div>Participants: ${pool.participants.toLocaleString()}</div>
                        <div>Min Stake: ${formatCurrency(pool.minStake)}</div>
                        <div><button class="btn btn--sm btn--primary">Stake</button></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    showOrderConfirmation() {
        const modal = document.getElementById('orderModal');
        const confirmation = document.getElementById('orderConfirmation');
        const bond = BondsData[AppState.selectedBond];
        
        const quantity = parseInt(document.getElementById('orderQuantity')?.value) || 0;
        const orderType = document.getElementById('orderType')?.value || 'limit';
        const price = orderType === 'market' ? 
            bond.currentPrice : 
            (parseFloat(document.getElementById('orderPrice')?.value) || bond.currentPrice);
        
        const total = quantity * price;
        const fees = total * 0.001; // 0.1% fee
        const finalTotal = total + fees;

        if (confirmation) {
            confirmation.innerHTML = `
                <div class="confirmation-row">
                    <span>Bond:</span>
                    <span>${bond.id} - ${bond.issuer}</span>
                </div>
                <div class="confirmation-row">
                    <span>Order Type:</span>
                    <span>${orderType.toUpperCase()} ${AppState.orderType.toUpperCase()}</span>
                </div>
                <div class="confirmation-row">
                    <span>Quantity:</span>
                    <span>${quantity.toLocaleString()} tokens</span>
                </div>
                <div class="confirmation-row">
                    <span>Price:</span>
                    <span>${formatCurrency(price)}</span>
                </div>
                <div class="confirmation-row">
                    <span>Subtotal:</span>
                    <span>${formatCurrency(total)}</span>
                </div>
                <div class="confirmation-row">
                    <span>Trading Fee (0.1%):</span>
                    <span>${formatCurrency(fees)}</span>
                </div>
                <div class="confirmation-row">
                    <span>Total:</span>
                    <span>${formatCurrency(finalTotal)}</span>
                </div>
            `;
        }

        if (modal) {
            modal.classList.remove('hidden');

            // Modal event listeners
            const cancelBtn = document.getElementById('cancelOrder');
            const confirmBtn = document.getElementById('confirmOrder');
            
            if (cancelBtn) {
                cancelBtn.onclick = () => {
                    modal.classList.add('hidden');
                };
            }

            if (confirmBtn) {
                confirmBtn.onclick = () => {
                    this.executeOrder(AppState.orderType, bond.id, quantity, price);
                    modal.classList.add('hidden');
                };
            }
        }
    }

    executeOrder(type, bondId, quantity, price) {
        // Simulate order execution
        const bond = BondsData[bondId];
        
        if (window.toastManager) {
            window.toastManager.show(
                `${type.charAt(0).toUpperCase() + type.slice(1)} order executed: ${quantity.toLocaleString()} tokens of ${bondId} at ${formatCurrency(price)}`,
                'success'
            );
        }

        // Update bond data (simulate market impact)
        if (type === 'buy') {
            bond.currentPrice += 0.25;
        } else {
            bond.currentPrice -= 0.25;
        }

        // Update order book and bond info
        this.updateOrderBook();
        this.updateBondInfo();

        // Clear form
        const quantityInput = document.getElementById('orderQuantity');
        const priceInput = document.getElementById('orderPrice');
        const totalElement = document.getElementById('orderTotal');
        
        if (quantityInput) quantityInput.value = '';
        if (priceInput) priceInput.value = '';
        if (totalElement) totalElement.textContent = formatCurrency(0);
    }
}

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.applyTheme();
        this.initializeThemeToggle();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-color-scheme', this.theme);
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        }
    }

    initializeThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.theme = this.theme === 'light' ? 'dark' : 'light';
                this.applyTheme();
                localStorage.setItem('theme', this.theme);
                console.log(`Theme switched to: ${this.theme}`);
            });
        }
    }
}

// Real-time Data Simulation
class DataSimulator {
    constructor() {
        this.isRunning = false;
        this.interval = null;
    }

    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.interval = setInterval(() => {
            this.updatePrices();
        }, 10000); // Update every 10 seconds
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.isRunning = false;
    }

    updatePrices() {
        Object.keys(BondsData).forEach(bondId => {
            const bond = BondsData[bondId];
            const volatility = (Math.random() - 0.5) * 2; // ±1 point max
            const newPrice = Math.max(bond.currentPrice + volatility, bond.tokenPrice * 0.95);
            
            BondsData[bondId].currentPrice = Number(newPrice.toFixed(2));
            BondsData[bondId].yield = Number(((bond.couponRate / newPrice) * bond.tokenPrice).toFixed(2));
        });

        // Update UI if on relevant views
        if (window.navigationManager) {
            if (AppState.currentView === 'trading') {
                window.navigationManager.updateBondInfo();
            }

            if (AppState.currentView === 'dashboard') {
                window.navigationManager.renderFeaturedBonds();
            }
        }
    }
}

// Application Initialization
class BondBazaarApp {
    constructor() {
        this.themeManager = new ThemeManager();
        this.navigationManager = new NavigationManager();
        this.dataSimulator = new DataSimulator();
        this.toastManager = new ToastManager();
        
        // Make managers globally accessible
        window.navigationManager = this.navigationManager;
        window.toastManager = this.toastManager;
        
        this.initialize();
    }

    initialize() {
        // Start real-time data simulation
        this.dataSimulator.start();

        // Initialize with dashboard view
        this.navigationManager.loadDashboard();

        // Add window resize handler for charts
        window.addEventListener('resize', () => {
            Object.values(this.navigationManager.charts.charts).forEach(chart => {
                if (chart) chart.resize();
            });
        });

        // Add click outside modal to close
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('orderModal');
            if (modal && e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        this.toastManager.show('Welcome to Bond Bazaar Pro! Real-time data simulation is active.', 'success');
        console.log('Bond Bazaar Pro initialized successfully!');
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new BondBazaarApp();
});