module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Planer Ślubu', // Tytuł główny kategorii
      items: [
        'backloge', // Przeniesiono na pierwsze miejsce
        'estimate', // Przeniesiono na drugie miejsce
        {
          type: 'category',
          label: 'Backlog Funkcjonalności', // Polskie znaki w label
          items: ['features'], // Zawiera tylko 'features'
        },
        'user_role',
        'architecture',
        'installation',
        'intro', // Dodano 'intro' na końcu
      ],
    },
  ],
};
