#!/bin/bash

# NVC Advanced Theme - GitHub Push Script
# This script will help you push your theme to GitHub

echo "🚀 NVC Advanced Theme - GitHub Setup"
echo "===================================="
echo ""

# Check if we're in the right directory
if [ ! -d "NVC Custom" ]; then
    echo "❌ Error: Please run this script from the theme root directory"
    exit 1
fi

echo "📝 Repository Details:"
echo "   Name: nvc-advanced-theme"
echo "   Branch: main"
echo ""

# Get GitHub username
echo "Please enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

echo ""
echo "Choose repository visibility:"
echo "  1) Public (anyone can see it)"
echo "  2) Private (only you and collaborators)"
read -p "Enter choice (1 or 2): " visibility_choice

echo ""
echo "📋 Next steps:"
echo ""
echo "1. Go to https://github.com/new"
echo "2. Create a new repository with these settings:"
echo "   - Repository name: nvc-advanced-theme"
echo "   - Description: Advanced Shopify theme for optical retail"
if [ "$visibility_choice" == "1" ]; then
    echo "   - Visibility: Public"
else
    echo "   - Visibility: Private"
fi
echo "   - DO NOT initialize with README, .gitignore, or license"
echo ""
echo "3. Press Enter here when repository is created..."
read -p ""

echo ""
echo "🔗 Connecting to GitHub..."

# Remove existing remote if any
git remote remove origin 2>/dev/null

# Add new remote
git remote add origin "https://github.com/$github_username/nvc-advanced-theme.git"

echo ""
echo "📤 Pushing to GitHub..."
echo ""

# Push to GitHub
if git push -u origin main; then
    echo ""
    echo "✅ Success! Your theme has been pushed to GitHub!"
    echo ""
    echo "🔗 Repository URL:"
    echo "   https://github.com/$github_username/nvc-advanced-theme"
    echo ""
    echo "📚 Next steps:"
    echo "   1. Visit your repository on GitHub"
    echo "   2. Add repository description and topics"
    echo "   3. Review the README.md"
    echo "   4. Invite collaborators if needed"
    echo ""
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   1. Repository was created on GitHub"
    echo "   2. You have write access"
    echo "   3. You're logged into the correct GitHub account"
    echo ""
    echo "To retry manually, run:"
    echo "   git remote add origin https://github.com/$github_username/nvc-advanced-theme.git"
    echo "   git push -u origin main"
    echo ""
    exit 1
fi
