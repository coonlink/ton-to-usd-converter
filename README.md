# TON to USD Converter

💸 Convert any DOM element with `data-tonToUsdPrice` into a compact USD format using the live TON price from the [coonlink API](https://api.coonlink.fun).

---

## 📦 Installation

Install via Composer:

```bash
composer require coonlink/ton-to-usd-converter
```

If you're using Laravel or another PHP framework, you can publish or link the JS file like this:

```blade
<script src="{{ asset('vendor/ton-to-usd-converter/js/tonToUsd.min.js') }}"></script>
```

Or include it directly via CDN (if you host it yourself or use jsDelivr/GitHub Pages):

```html
<script src="https://cdn.yourdomain.com/tonToUsd.min.js"></script>
```

---

## 💡 Usage

In your HTML, use the `data-tonToUsdPrice` attribute on any element:

```html
<span data-tonToUsdPrice="42.5">0</span>
```

When the script runs, it will fetch the current TON→USD rate and update the content automatically:

```
$169.25
```

You can optionally specify a custom rate via `data-tonToUsdRate`:

```html
<span data-tonToUsdPrice="10" data-tonToUsdRate="2.5">0</span> <!-- Outputs $25.00 -->
```

---

## 🔁 Manual Update (Optional)

The script automatically runs on page load and listens for DOM changes, but you can also trigger it manually:

```js
window.updateTonToUsdPrices(); // Immediate refresh

// Or dispatch a custom event
window.dispatchEvent(new Event('updateTonPrices'));
```

---

## ⚙️ How It Works

- Fetches current TON→USD rate from:  
  `https://api.coonlink.fun/v1/ton/rate`
- Caches the rate for 60 seconds
- Finds all elements with `data-tonToUsdPrice`
- Multiplies the amount × rate
- Outputs a compact USD format:
  - `$1.23K`, `$45.67M`, etc.
- Supports dynamic DOM updates via `MutationObserver`

---

## 🧪 Example

```html
<span data-tonToUsdPrice="100">0</span>
<span data-tonToUsdPrice="55.5">0</span>
<span data-tonToUsdPrice="12.3" data-tonToUsdRate="2">0</span>
```

Outputs something like:

```
$400.00
$222.00
$24.60
```

---

## 🛡 License

MIT © [Coonlink](https://coonlink.fun)
