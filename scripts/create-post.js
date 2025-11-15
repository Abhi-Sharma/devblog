#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

async function createPost() {
  console.log('\n📝 Create a New Blog Post\n');

  const title = await ask('Title: ');
  const description = await ask('Description: ');
  const tags = await ask('Tags (comma-separated): ');
  const slug = await ask(`Slug (default: ${slugify(title)}): `) || slugify(title);

  const date = new Date().toISOString().split('T')[0];
  const tagsArray = tags.split(',').map(tag => `"${tag.trim()}"`).join(', ');

  const content = `---
title: "${title}"
description: "${description}"
date: "${date}"
tags: [${tagsArray}]
slug: "${slug}"
coverImage: "/images/blog/${slug}.jpg"
---

# ${title}

Write your blog post content here using markdown...

## Section 1

Your content goes here.

## Section 2

More content...

## Conclusion

Wrap up your post.
`;

  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`);

  fs.writeFileSync(filePath, content);

  console.log(`\n✅ Post created successfully!`);
  console.log(`📁 File: ${filePath}`);
  console.log(`🖼️  Don't forget to add your cover image: public/images/blog/${slug}.jpg\n`);

  rl.close();
}

createPost().catch(console.error);
