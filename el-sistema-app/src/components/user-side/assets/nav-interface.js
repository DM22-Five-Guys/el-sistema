

export default {
  toSend: [
    {
      id: 1,
      name: 'Home',
      path: '/home',
      selectorWidth: 61,
      selected: false,
      support: false
    },
    {
      id: 2,
      name: 'Calendar',
      path: '/calendar',
      selectorWidth: 82,
      selected: false,
      support: false
    },
    {
      id: 3,
      name: 'About Us',
      path: '/about',
      selectorWidth: 86,
      selected: false,
      support: false
    },
    {
      id: 4,
      name: 'Media',
      path: '/media',
      selectorWidth: 57,
      selected: false,
      support: false
    },
    {
      id: 5,
      name: 'Blog',
      path: '/blog',
      selectorWidth: 42,
      selected: false,
      support: false
    },
    {
      id: 6,
      name: 'Support Us',
      path: '/support',
      selectorWidth: 0,
      selected: false,
      support: true
    }
  ],

  getCurrentPage: function(url) {
    var current;
    this.toSend.forEach(page => {
      if (url.includes(page.path))
        current = page;
    })
    return current || this.toSend[0];
  },

  giveNavigationState: function(url) {
    const currentID = this.getCurrentPage(url).id;
    return this.toSend.map(page => {
      if (page.id === currentID) {
        page.selected = true;
        return page;
      } else {
          page.selected = false;
          return page;
      }
    })
  },

  giveTopMargin: function(url) {
    const currentID = this.getCurrentPage(url).id;
    return currentID === 1 ? 130 : 92.5;
  }
}
