#!/bin/bash

# Script de Deploy - Mercado do Porto Digital (/feira/)
echo "🚀 Iniciando deploy para subdiretório /feira/..."

# Limpar build anterior
echo "🧹 Limpando build anterior..."
rm -rf dist/

# Fazer build de produção
echo "⚙️  Fazendo build de produção com base='/feira/'..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    
    # Criar arquivo ZIP para upload
    echo "📦 Criando arquivo para deploy..."
    cd dist/
    zip -r ../mercado-do-porto-feira-deploy.zip .
    cd ..
    
    echo ""
    echo "🎉 Deploy preparado com sucesso!"
    echo "📁 Pasta: ./dist/"
    echo "📦 Arquivo ZIP: ./mercado-do-porto-feira-deploy.zip"
    echo ""
    echo "📋 INSTRUÇÕES DE INSTALAÇÃO:"
    echo ""
    echo "1. Crie a pasta 'feira' no seu servidor Apache:"
    echo "   mkdir /var/www/html/feira"
    echo ""
    echo "2. Copie todo o conteúdo da pasta 'dist/' para:"
    echo "   /var/www/html/feira/"
    echo ""
    echo "3. Ou faça upload do arquivo .zip e descompacte em:"
    echo "   /var/www/html/feira/"
    echo ""
    echo "4. Certifique-se de que o mod_rewrite está habilitado no Apache"
    echo ""
    echo "5. Acesse o site em:"
    echo "   http://seusite.com/feira/"
    echo ""
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi 