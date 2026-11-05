export interface InfoPage { slug: string; title: string; intro: string; sections: { title: string; text: string }[]; links: { href: string; label: string }[] }
export const infoPages: InfoPage[] = [
  {
    "slug": "brew-guide",
    "title": "Brew Guide",
    "intro": "Make a little room for your daily ritual.",
    "sections": [
      {
        "title": "Hot brew",
        "text": "Choose a tea, check its product page for brewing instructions, and use a timer for a repeatable cup. Where a blend’s instructions have not yet been confirmed, we’ll mark them as coming soon."
      },
      {
        "title": "Cold brew",
        "text": "Our blend-specific cold-brew guide is coming soon. A tea described as suitable for serving iced is not automatically a confirmed cold-brew product."
      },
      {
        "title": "Find the instructions for your tea",
        "text": "The established blends in our collection include a temperature, steeping time, and amount on their product pages. Instructions for the five newest blends are still being prepared."
      }
    ],
    "links": [
      {
        "href": "shop?brew=hot",
        "label": "Browse teas with hot-brew instructions"
      },
      {
        "href": "tea-101/a-personal-tea-ritual",
        "label": "Build your own tea ritual"
      }
    ]
  },
  {
    "slug": "tea-101",
    "title": "Tea 101 / Blog",
    "intro": "Small reads for a more thoughtful tea break.",
    "sections": [],
    "links": [
      {
        "href": "tea-101/a-personal-tea-ritual",
        "label": "Make a tea ritual your own"
      },
      {
        "href": "tea-101/keep-a-tea-journal",
        "label": "Keep a simple tasting journal"
      },
      {
        "href": "tea-101/choose-your-next-blend",
        "label": "Choose your next blend"
      }
    ]
  },
  {
    "slug": "tea-101/a-personal-tea-ritual",
    "title": "Make a tea ritual your own",
    "intro": "A pause does not have to be complicated.",
    "sections": [
      {
        "title": "Choose your moment",
        "text": "Pick a small part of the day you want to make your own: a quiet start, a screen break, or time with a friend. Let that moment guide the pace."
      },
      {
        "title": "Keep the setup simple",
        "text": "Set out your cup and tea, and follow the instructions for your particular blend. Put the phone aside if you like. Notice the aroma and the changing color as the tea steeps."
      },
      {
        "title": "Keep what you enjoy",
        "text": "There is no perfect ritual to copy. A favorite cup, a page of a book, or a few minutes of quiet can be enough."
      }
    ],
    "links": [
      {
        "href": "brew-guide",
        "label": "Visit the Brew Guide"
      }
    ]
  },
  {
    "slug": "tea-101/keep-a-tea-journal",
    "title": "Keep a simple tasting journal",
    "intro": "Discover what you enjoy, one cup at a time.",
    "sections": [
      {
        "title": "Write down the setup",
        "text": "Note the tea name, the amount used, the water temperature, and the steeping time. Use the blend’s instructions as your starting point."
      },
      {
        "title": "Use your own words",
        "text": "Does it remind you of flowers, fruit, toast, or something else? Write the associations that come to mind, without worrying about the “right” vocabulary."
      },
      {
        "title": "Compare your next cup",
        "text": "Record what you liked and what you would change. Keep the rest of your preparation the same when trying one adjustment, so the comparison is easier."
      }
    ],
    "links": [
      {
        "href": "shop",
        "label": "Explore the collection"
      }
    ]
  },
  {
    "slug": "tea-101/choose-your-next-blend",
    "title": "Choose your next blend",
    "intro": "Start with a flavor that catches your attention.",
    "sections": [
      {
        "title": "Follow your curiosity",
        "text": "Try searching the collection for a flavor you enjoy, such as pear, rose, or citrus. Read the individual description rather than relying on the product name alone."
      },
      {
        "title": "Narrow the collection",
        "text": "Use the variety filters to compare teas in the same category. Brewing-method and packaging filters show only confirmed matches; missing details do not mean a product is unavailable in every format."
      },
      {
        "title": "Check before ordering",
        "text": "The storefront is currently a demo. New blends without confirmed prices are marked Coming soon, and no real orders are placed."
      }
    ],
    "links": [
      {
        "href": "shop",
        "label": "Find a tea"
      }
    ]
  },
  {
    "slug": "gift-sets",
    "title": "Gift Sets",
    "intro": "Something thoughtful, ready to share.",
    "sections": [
      {
        "title": "Coming soon",
        "text": "Our gift collection is not available yet. Set contents, packaging, and prices will appear here once confirmed. No gift sets can currently be ordered."
      }
    ],
    "links": [
      {
        "href": "shop",
        "label": "Explore individual teas"
      }
    ]
  },
  {
    "slug": "tea-accessories",
    "title": "Tea Accessories",
    "intro": "A place for the tools that complete your ritual.",
    "sections": [
      {
        "title": "Coming soon",
        "text": "Our accessory range is still being prepared. Product details and prices will be added when confirmed. Accessories are not currently available to order."
      }
    ],
    "links": [
      {
        "href": "brew-guide",
        "label": "Explore the Brew Guide"
      }
    ]
  },
  {
    "slug": "chora-story",
    "title": "Chora Story",
    "intro": "A little stillness. A lot of character.",
    "sections": [
      {
        "title": "Your everyday tea ritual",
        "text": "Chora Tea brings together a growing collection of floral and fruity blends. Explore the collection and find a cup that fits your day."
      },
      {
        "title": "More of our story is on its way",
        "text": "Our founder story and the details behind our blends will be shared here once finalized."
      }
    ],
    "links": [
      {
        "href": "ingredient-sources",
        "label": "Ingredient Sources"
      },
      {
        "href": "sustainability",
        "label": "Sustainability"
      }
    ]
  },
  {
    "slug": "ingredient-sources",
    "title": "Ingredient Sources",
    "intro": "Know more about what goes into your cup.",
    "sections": [
      {
        "title": "Sourcing details coming soon",
        "text": "Ingredient origins and supplier information have not yet been confirmed for publication. We’ll add blend-specific sourcing details here as they become available."
      },
      {
        "title": "Before choosing a blend",
        "text": "Product descriptions introduce each blend, but they are not a complete ingredient or allergen declaration. Full ingredient and allergen information must be confirmed before products are offered for sale."
      }
    ],
    "links": [
      {
        "href": "chora-story",
        "label": "Back to Chora Story"
      }
    ]
  },
  {
    "slug": "sustainability",
    "title": "Sustainability",
    "intro": "Clear information, without unverified promises.",
    "sections": [
      {
        "title": "Details coming soon",
        "text": "Our packaging materials, disposal guidance, and sourcing practices are not yet documented here. We’ll publish confirmed information as the collection develops."
      },
      {
        "title": "What to expect",
        "text": "Future updates will describe specific materials and practices. We are not currently making organic, compostability, ethical-certification, or carbon-neutral claims."
      }
    ],
    "links": [
      {
        "href": "ingredient-sources",
        "label": "Explore Ingredient Sources"
      }
    ]
  },
  {
    "slug": "account",
    "title": "My Account",
    "intro": "Your Chora Tea account space.",
    "sections": [
      {
        "title": "Customer accounts are coming soon",
        "text": "Sign-in, saved addresses, and order history are not available in this demo. We are not collecting passwords or creating customer accounts yet."
      },
      {
        "title": "Your current basket",
        "text": "You can still explore the collection and use the demo basket. No payment is taken and no real order is shipped."
      }
    ],
    "links": [
      {
        "href": "cart",
        "label": "View your basket"
      },
      {
        "href": "help",
        "label": "Visit the Help Center"
      }
    ]
  },
  {
    "slug": "help",
    "title": "Help Center",
    "intro": "A few answers before your next cup.",
    "sections": [
      {
        "title": "Can I place a real order?",
        "text": "Not yet. This is a demo storefront. No payment is taken and no real order is shipped."
      },
      {
        "title": "Why do some teas say Coming soon?",
        "text": "Those blends do not have confirmed prices and are not available to add to the basket."
      },
      {
        "title": "Why are some filter results empty?",
        "text": "We only show confirmed matches. Packaging and cold-brew information are still being added; try clearing those filters to see the full collection."
      },
      {
        "title": "Where can I find brewing instructions?",
        "text": "Open an individual tea’s product page. Confirmed instructions appear there. You can also visit the Brew Guide for an overview."
      },
      {
        "title": "Can I sign in or track an order?",
        "text": "Customer accounts and order tracking are not available yet."
      },
      {
        "title": "Shipping, returns, and contacting us",
        "text": "Shipping terms, return policies, and a customer-support contact will be published before real ordering opens."
      }
    ],
    "links": [
      {
        "href": "brew-guide",
        "label": "Open the Brew Guide"
      },
      {
        "href": "shop",
        "label": "Back to the collection"
      }
    ]
  }
]

