---
layout: default
title: "Blog"
permalink: /blog/
---
# Blog

{% for post in site.posts %}
  <article class="mb-8">
    <h2 class="text-xl font-bold mb-1">
      <a href="{{ post.url }}" class="text-emerald-500 hover:underline">{{ post.title }}</a>
    </h2>
    <p class="text-sm text-neutral-400">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
  </article>
{% endfor %}