

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

  getCurrentPage: function(path) {
    var current;
    this.toSend.forEach(page => {
      if (path.includes(page.path))
        current = page;
    })
    return current || this.toSend[0];
  },

  giveNavigationState: function(path) {
    const currentID = this.getCurrentPage(path).id;
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

  giveTopMargin: function(path) {
    const currentID = this.getCurrentPage(path).id;
    return currentID === 1 ? 130 : 92.5;
  }
}
