#!/bin/bash

# Deploy script para Mercado do Porto PWA
echo "🏗️  Building Mercado do Porto PWA..."

# Build da aplicação
npm run build

echo "✅ Build completed!"
echo ""
echo "📱 PWA Features:"
echo "   • Installable app"
echo "   • Offline capable"
echo "   • Fullscreen mobile"
echo "   • No browser bars"
echo "   • Fast loading"
echo ""
echo "🚀 Deploy the 'dist' folder to your web server"
echo "🔗 Test PWA: https://your-domain.com"
echo ""
echo "📱 To install on mobile:"
echo "   1. Open in Chrome/Safari"
echo "   2. Look for 'Add to Home Screen'"
echo "   3. App will run fullscreen!" 